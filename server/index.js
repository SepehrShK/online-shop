const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
    rejectUnauthorized: false
    },
});


const adminUser = { username: 'admin', password: '1234' };

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === adminUser.username && password === adminUser.password) {
        res.json({ success: true, message: 'ورود موفقیت آمیز بود', role: 'admin' });
    } else {
        res.status(401).json({ success: false, message: 'نام کاربری و یا رمز اشتباه می باشد', role: 'user' });
    }
});

app.get("/products", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM products");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
