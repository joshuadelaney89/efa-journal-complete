require('dotenv').config();
let express = require('express');
let app = express();
let sequelize = require('./db')

let journal = require('./controllers/journalcontroller')
let calc  = require('./controllers/calculatorcontroller')
let user = require('./controllers/usercontroller')

// app.use('/test', function(req, res){
//     res.send('This is a message from the test endpoint on the server!')
// })

sequelize.sync();

app.use(require('./middleware/headers'));

app.use(express.json());

app.use('/journal', journal);
app.use('/user', user);

app.use('/journal/about', function(req, res)
{
    res.send('This is the about route!')
})

app.listen(3000, function(){
    console.log('App is listening on port 3000');
})