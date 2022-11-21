const express = require('express');
const expressHandlebars = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize');
const sequelize = require('./config/connection');
const controllers = require('./controllers');
const path = require('path');
const handlebars = expressHandlebars.create({});

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(controllers);

sequelize.sync({force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});