const express = require('express');
const app = express();

app.use('/api/users',require('./routes/users'))
app.use('/api/auth',require('./routes/auth'))
app.use('/api/contact',require('./routes/contact'))


// home page => request()
app.get('/',(req,res) => res.json({msg: 'Welcome To the Backend with desouky'}))
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on Port ${PORT}`))

