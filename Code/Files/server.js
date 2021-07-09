const express = require('express')
const path = require('path')
const DirName = require('./util/path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const sequelize = require('./util/db');
const mainRoutes = require('./routes/main');
const Pre_installation = require('./models/pre-installation');
const Equipment = require('./models/equipment');
const Engineers = require('./models/engineers');
const spareParts = require('./models/spareParts');
const DailyInspection = require('./models/DailyInspection');
const preventive = require('./models/preventive');
const app = express();
var cookieParser = require('cookie-parser');
const multer = require('multer');
var session = require('express-session');
const flash = require('req-flash');
app.engine('handlebars', exphbs({ layout: false }));
app.set('view engine', 'handlebars');
app.set('views', 'views/home');
// parsing the request's body  to enable working with it
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(DirName + '/public/'));
// using the routes in the routes file 
app.use(mainRoutes);



// synchronizing with database 
sequelize.sync({force:true}).then(res => {
        app.listen(3000, () => {
            console.log('Running')
        })

    })
    .catch(err => {
        console.log("err:", err);
    })