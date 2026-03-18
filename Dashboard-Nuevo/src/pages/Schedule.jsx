import { useState, useEffect } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Modal from '../components/Modal';
import BotonEliminar from '../components/BotonEliminar';
import BotonAgregar from '../components/BotonAgregar';
import './Schedule.css';

function Schedule() {

    const [schedule, setSchedule] = useState(() => {
        const savedSchedule = localStorage.getItem('schedule');
        return savedSchedule ? JSON.parse(savedSchedule) : [];
    });
    const [nuevaFecha, setNuevaFecha] = useState('');
    const [nuevoEvento, setNuevoEvento] = useState('');
    const [listaFechas, setListaFechas] = useState(() => {
        const savedFechas = localStorage.getItem('fechas');
        return savedFechas ? JSON.parse(savedFechas) : [];
    });
    const [modalAbierto, setModalAbierto] = useState(false);

    const handleAgregarItem = (e) => {
        e.preventDefault();
        setModalAbierto(true);
    }

    const eliminarItem = (id) => {
        setListaFechas(listaFechas.filter(item => item.id !== id));
        setSchedule(schedule.filter(item => item.id !== id));
        localStorage.setItem('fechas', JSON.stringify(listaFechas.filter(item => item.id !== id)));
        localStorage.setItem('schedule', JSON.stringify(schedule.filter(item => item.id !== id)));
    }


    const handleModalSubmit = (e) => {
        e.preventDefault();
        if(!nuevoEvento || !nuevaFecha) return;

        const nuevoObjeto = {
            id: Date.now(),
            fecha: nuevaFecha,
            evento: nuevoEvento
        };

        setListaFechas([...listaFechas, nuevoObjeto]);
        setSchedule([...schedule, nuevoObjeto]);

        setNuevaFecha('');
        setNuevoEvento('');
        setModalAbierto(false);
        localStorage.setItem('fechas', JSON.stringify([...listaFechas, nuevoObjeto]));
        localStorage.setItem('schedule', JSON.stringify([...schedule, nuevoObjeto]));
    }
    

    return (
        <div className="schedule-container">
            <section className="schedule-header">
                <h1>Schedule</h1>
                <BotonAgregar onClick={handleAgregarItem} />
            </section>

            <section className="fechas-importantes">
                
                {listaFechas.length === 0 ? (
                    <p>No hay fechas importantes</p>
                ) : (
                    listaFechas.map((item) => (
                        <div key={item.id} className="fecha-item">
                            <span>{item.fecha} - <strong>{item.evento}</strong></span>
                            <BotonEliminar onClick={() => eliminarItem(item.id)} />
                        </div>
                    ))
                )}
            </section>

            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                contentHeight="auto"
                aspectRatio={1.35}
                events={schedule}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth'
                }}
                buttonText={{
                    today: 'Hoy',
                    month: 'Mes',
                    week: 'Semana',
                    day: 'Día'
                }}
                locale='es'
            />
            <Modal isOpen={modalAbierto} onClose={() => setModalAbierto(false)} onSubmit={handleModalSubmit}>
                <input type="date" value={nuevaFecha} onChange={(e) => setNuevaFecha(e.target.value)} />
                <input type="text" value={nuevoEvento} onChange={(e) => setNuevoEvento(e.target.value)} />
                <button type="submit">Agregar</button>
            </Modal>
        </div>
    )
}

export default Schedule;
