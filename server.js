const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const port = process.env.PORT || 5000;
const app = express();
const db = config.get('mongoURI');
app.use(express());
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('There was an error connecting to MongoDB', err));
app.use('/api/posts', require('/routes/api/posts'));
app.use('/api/users', require('/routes/api/users'));
app.get('/', (req, res) => {
    res.send('App Here');
});
app.listen(port, () => console.log(`App is listening on port ${port}`));