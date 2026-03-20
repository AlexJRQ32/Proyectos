import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.css';

function Calendario({ data = [] }){
    return(
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            contentHeight="auto"
            aspectRatio={1.35}
            events={data.map(item => ({
                id: item.id,
                title: item.event,
                start: item.date,
                allDay: true
            }))}
            eventContent={(eventInfo) => (
                <div className="calendar-event-pin">
                    <i className="fa-solid fa-thumbtack"></i>
                    <span>{eventInfo.event.title}</span>
                </div>
            )}
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth'
            }}
            buttonText={{
                today: 'Today',
                month: 'Month',
                week: 'Week',
                day: 'Day'
            }}
            locale='en'
        />
    )
}

export default Calendario;
