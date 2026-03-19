import { useState, useEffect } from "react";
import BotonAgregar from "../components/BotonAgregar";
import BotonEliminar from "../components/BotonEliminar";
import Modal from "../components/Modal";
import './Inventory.css';
import BotonEditar from "../components/BotonEditar";

function Inventory() {

    const [inventory, setInventory] = useState(() => {
        const savedInventory = localStorage.getItem('inventory');
        return savedInventory ? JSON.parse(savedInventory) : [];
    });
    const [editingId, setEditingId] = useState(null);
    const [itemName, setItemName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newDescription, setNewDescription] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newPrice, setNewPrice] = useState('');

    useEffect(() => {
        localStorage.setItem('inventory', JSON.stringify(inventory));
    }, [inventory]);

    const handleAddItem = () => {
        setEditingId(null);
        clearForm();
        setIsModalOpen(true);
    }

    const clearForm = () => {
        setItemName('');
        setNewDescription('');
        setNewQuantity('');
        setNewPrice('');
    }

    const handleModalSubmit = (e) => {
        e.preventDefault();
        const newTotal = Number(newQuantity) * Number(newPrice);

        const itemData = {
            id: editingId ? editingId : Date.now(),
            item: itemName,
            description: newDescription,
            quantity: newQuantity,
            price: newPrice,
            total: newTotal
        };

        if(editingId){
            setInventory(inventory.map(item => item.id === editingId ? itemData : item));
        }else{
            setInventory([...inventory, itemData]);
        }
        setIsModalOpen(false);
        clearForm();
    }

    const handleDeleteItem = (id) => {
        setInventory(inventory.filter(item => item.id !== id));
    }

    const handleEditItem = (editingId) => {
        const itemToEdit = inventory.find(item => item.id === editingId);
        if(itemToEdit){
            setEditingId(editingId);
            setItemName(itemToEdit.item);
            setNewDescription(itemToEdit.description);
            setNewQuantity(itemToEdit.quantity);
            setNewPrice(itemToEdit.price);
            setIsModalOpen(true);
        }
    }



    return (
        <div className="inventory-page">
            <section className="inventory-header">
                <h1>Inventory</h1>
                <BotonAgregar onClick={handleAddItem} />
            </section>
            <section className="inventory-container">
                {inventory.length === 0 ? (
                    <p>No items found</p>
                ) : (
                    inventory.map((item) => (
                        <div key={item.id} className="inventory-item">
                            <span><strong>Product:</strong> {item.item}</span>
                            <span><strong>Description:</strong> {item.description}</span>
                            <span><strong>Quantity:</strong> {item.quantity}</span>
                            <span><strong>Price:</strong> {item.price}</span>
                            <span><strong>Total:</strong> {item.total}</span>
                            <BotonEditar onClick={() => handleEditItem(item.id)} />
                            <BotonEliminar onClick={() => handleDeleteItem(item.id)} />
                        </div>
                    ))
                )}
            </section>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit}>
                <input type="text" value={itemName} placeholder="Product" onChange={(e) => setItemName(e.target.value)} />
                <input type="text" value={newDescription} placeholder="Description" onChange={(e) => setNewDescription(e.target.value)} />
                <input type="number" value={newQuantity} placeholder="Quantity" onChange={(e) => setNewQuantity(e.target.value)} />
                <input type="number" value={newPrice} placeholder="Price" onChange={(e) => setNewPrice(e.target.value)} />
                <button type="submit">{editingId ? 'Update' : 'Add'}</button>
            </Modal>
        </div>
    )
}

export default Inventory;