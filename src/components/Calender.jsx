
import Fullcalendar   from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction"
import * as bootstrap from "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import { intlFormat } from 'date-fns';


function Calendar() { 
    const events = [
        {
            title: "Title 1",
            start: "2024-03-13T08:00:00",
            end: "2024-03-13T09:00:00",
            color: "green",
            textColor:"pink"
            
            
        
            
            
        },
        {
            title: "Title 2",
            start: "2024-03-13T09:00:00",
            end: "2024-03-13T10:00:00",
            color: "red",
        },
        {
            title: "Title 3",
            start: "2024-03-13T13:00:00",
            end: "2024-03-13T14:00:00",
            color: "yellow",
        }
    ]

    const handleDateClick = (args) => { 
        alert(args.dateStr)
    }
    const calendarEventDragged = (event) => { 
        let id = event.id;
        console.log(event.start)
        // check this out "https://www.youtube.com/watch?v=Q8NV4koY7nU"
    }
    
    return (
        <div>
        <div>Calendar</div>
            <div>
                <Fullcalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView={"dayGridMonth"}
                    headerToolbar={{
                        start: "today, prev, next",
                        center: "title",
                        end: "dayGridMonth, timeGridWeek, timeGridDay"
                    }}
                    height={"90vh"}
                    events={events}
                    eventDidMount={(info) => {
                        return new bootstrap.Popover(info.el, {
                            title: info.event.title,
                            placement: "auto",
                            trigger: "hover",
                            customClass: "popoverStyle",
                            content: "<p> Please subscribe <Strong>Bootstrap popover</Strong>.</p>",
                            html: true

                        })

                        

                    }}
                    dateClick={handleDateClick}
                    editable={true}
                    eventDrop={(info) => {
                        console.log(info)
                        const id = info.event.id
                        console.log(info.event.start.toDateString())
                        

                    }}
                    
                    
                    
                    
                />
            </div>
        </div>
        

    )
}
export default Calendar