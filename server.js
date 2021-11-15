const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*', (req, res) => {
    res.json({ message: 'Welcome to my app.'});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});