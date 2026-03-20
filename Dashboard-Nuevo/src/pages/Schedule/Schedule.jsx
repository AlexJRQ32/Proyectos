import { useState, useEffect } from "react";
import Modal from '../../components/Modal/Modal';
import Buttons from '../../components/Buttons/Buttons';
import Calendario from '../../components/Calendar/Calendar';
import './Schedule.css';

function Schedule() {

    const [editingId, setEditingId] = useState(null);
    const [newDate, setNewDate] = useState('');
    const [newEvent, setNewEvent] = useState('');
    const [datesList, setDatesList] = useState(() => {
        const savedDates = localStorage.getItem('dates');
        return savedDates ? JSON.parse(savedDates) : [];
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('dates', JSON.stringify(datesList));
    }, [datesList]);

    const clearForm = () => {
        setNewDate('');
        setNewEvent('');
    }


    const handleAddItem = (e) => {
        e.preventDefault();
        setEditingId(null);
        clearForm();
        setIsModalOpen(true);
    }

    const deleteItem = (id) => {
        setDatesList(datesList.filter(item => item.id !== id));
    }


    const handleModalSubmit = (e) => {
        e.preventDefault();
        if(!newEvent || !newDate) return;

        const newObject = {
            id: editingId ? editingId : Date.now(),
            date: newDate,
            event: newEvent
        };

        if(editingId){
            setDatesList(datesList.map(item => item.id === editingId ? newObject : item));
        }else{
            setDatesList([...datesList, newObject]);
        }

        setIsModalOpen(false);
        clearForm();
    }

    const handleEditItem = (id) => {
        const item = datesList.find(item => item.id === id);
        if(item){
            setEditingId(id);
            setNewDate(item.date);
            setNewEvent(item.event);
            setIsModalOpen(true);
        }
    }
    

    return (
        <div className="schedule-container">
            <section className="schedule-header">
                <h1>Schedule</h1>
                <Buttons icon="plus" onClick={handleAddItem} type="btn-add" />
            </section>

            <section className="fechas-importantes">
                
                {datesList.length === 0 ? (
                    <p>No important dates</p>
                ) : (
                    datesList.map((item) => (
                        <div key={item.id} className="fecha-item">
                            <span>{item.date} - <strong>{item.event}</strong></span>
                            <Buttons icon="edit" onClick={() => handleEditItem(item.id)} type="btn-edit" />
                            <Buttons icon="trash" onClick={() => deleteItem(item.id)} type="btn-trash" />
                        </div>
                    ))
                )}
            </section>
            <Calendario data={datesList} />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit}>
                <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
                <input type="text" value={newEvent} onChange={(e) => setNewEvent(e.target.value)} />
                <button type="submit">{editingId ? 'Update' : 'Add'}</button>
            </Modal>
        </div>
    )
}

export default Schedule;
