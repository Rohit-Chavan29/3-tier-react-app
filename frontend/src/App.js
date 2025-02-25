import React, { useState, useEffect } from 'react';
import './App.css'; // We'll add some basic CSS styles

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://backend:5000/api/items');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;

    try {
      await fetch('http://backend:5000/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newItem }),
      });
      setNewItem('');
      fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://backend:5000/api/items/${id}`, {
        method: 'DELETE',
      });
      fetchItems(); // Refresh items after delete
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>Item Manager</h1>
      <form onSubmit={handleSubmit} className="item-form">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter new item"
          className="input-field"
        />
        <button type="submit" className="add-button">Add Item</button>
      </form>

      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id} className="item-card">
            {item.name}
            <button onClick={() => handleDelete(item.id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
