const express = require('express');
const expressHandlebars = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const controllers = require('./controllers');
const path = require('path');
const helpers = require('./utils/helpers');
const handlebars = expressHandlebars.create({ helpers });

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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(controllers);

sequelize.sync({force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening' + PORT));
});