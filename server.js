const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/db.config');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.get('*', (req, res) => {
    res.json({ message: 'Welcome to my app.'});
});


sequelize.sync({ force: false }).then(() => {
    console.log('Sequelize connected and running.');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
});
