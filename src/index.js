const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();
//connect to DB

mongoose.connect('mongodb://localhost/instaclone',{ useNewUrlParser: true, useUnifiedTopology: true },() => {
    console.log('connected to DB')})                                                                         // here blog is the database that is created and conenceted to mongodb


app.listen(3000, () => console.log('Server running......'));

