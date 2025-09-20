const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const adminUser = { username: 'admin', password: '1234' };

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === adminUser.username && password === adminUser.password) {
        res.json({ success: true, message: 'ورود موفقیت آمیز بود', role: 'admin' });
    } else {
        res.status(401).json({ success: false, message: 'نام کاربری و یا رمز اشتباه می باشد', role: 'user' });
    }
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
