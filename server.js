const express = require('express');

const friendsRouter = require('./routes/friends.router');

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use('/friends', friendsRouter);















app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}...`);
} )