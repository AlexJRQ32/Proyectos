import { useState, useEffect } from "react";
import BotonAgregar from "../components/BotonAgregar";
import BotonEliminar from "../components/BotonEliminar";
import Modal from "../components/Modal";
import './Inventory.css';

function Inventory() {

    const [inventory, setInventory] = useState(() => {
        const savedInventory = localStorage.getItem('inventory');
        return savedInventory ? JSON.parse(savedInventory) : [];
    });
    const [nuevoItem, setNuevoItem] = useState('');
    const [modalAbierto, setModalAbierto] = useState(false);
    const [nuevoDescripcion, setNuevoDescripcion] = useState('');
    const [nuevoCantidad, setNuevoCantidad] = useState('');
    const [nuevoPrecio, setNuevoPrecio] = useState('');

    const handleAgregarItem = () => {
        setModalAbierto(true);
    }

    const handleModalSubmit = (e) => {
        e.preventDefault();
        if(!nuevoItem) return;

        const precioTotal = (parseFloat(nuevoCantidad) * parseFloat(nuevoPrecio)).toFixed(2);
        const precio = parseFloat(nuevoPrecio).toFixed(2);

        const nuevoObjeto = {
            id: Date.now(),
            item: nuevoItem,
            descripcion: nuevoDescripcion,
            cantidad: nuevoCantidad,
            precio: precio,
            total: precioTotal
        };

        setInventory([...inventory, nuevoObjeto]);
        setNuevoItem('');
        setModalAbierto(false);
        localStorage.setItem('inventory', JSON.stringify([...inventory, nuevoObjeto]));
    }

    const eliminarItem = (id) => {
        setInventory(inventory.filter(item => item.id !== id));
        localStorage.setItem('inventory', JSON.stringify(inventory.filter(item => item.id !== id)));
    }



    return (
        <div className="inventory-page">
            <section className="inventory-header">
                <h1>Inventory</h1>
                <BotonAgregar onClick={handleAgregarItem} />
            </section>
            <section className="inventory-container">
                {inventory.length === 0 ? (
                    <p>No hay items</p>
                ) : (
                    inventory.map((item) => (
                        <div key={item.id} className="inventory-item">
                            <span><strong>Producto:</strong> {item.item}</span>
                            <span><strong>Descripcion:</strong> {item.descripcion}</span>
                            <span><strong>Cantidad:</strong> {item.cantidad}</span>
                            <span><strong>Precio:</strong> {item.precio}</span>
                            <span><strong>Total:</strong> {item.total}</span>
                            <BotonEliminar onClick={() => eliminarItem(item.id)} />
                        </div>
                    ))
                )}
            </section>
            <Modal isOpen={modalAbierto} onClose={() => setModalAbierto(false)} onSubmit={handleModalSubmit}>
                <input type="text" value={nuevoItem} placeholder="Producto" onChange={(e) => setNuevoItem(e.target.value)} />
                <input type="text" value={nuevoDescripcion} placeholder="Descripcion" onChange={(e) => setNuevoDescripcion(e.target.value)} />
                <input type="number" value={nuevoCantidad} placeholder="Cantidad" onChange={(e) => setNuevoCantidad(e.target.value)} />
                <input type="number" value={nuevoPrecio} placeholder="Precio" onChange={(e) => setNuevoPrecio(e.target.value)} />
                <button type="submit">Agregar</button>
            </Modal>
        </div>
    )
}

export default Inventory;