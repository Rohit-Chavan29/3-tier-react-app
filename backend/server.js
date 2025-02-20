require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER ,
  host: process.env.DB_HOST ,
  database: process.env.DB_NAME ,
  password: process.env.DB_PASSWORD ,
  port: process.env.DB_PORT,
});

// Initialize database
const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS items (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL
      );
    `);
    console.log('Database initialized');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

initDB();

// Routes
app.get('/api/items', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching items' });
  }
});

app.post('/api/items', async (req, res) => {
  const { name } = req.body;
  try {
    await pool.query('INSERT INTO items (name) VALUES ($1)', [name]);
    res.status(201).json({ message: 'Item added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding item' });
  }
});
app.delete('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM items WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting item' });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});