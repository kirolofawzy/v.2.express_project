const express = require('express')
const app = express()
const port = 300



const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
app.get('/', (req, res) => {
  res.sendFile("./kiro/index.html",{root:__dirname})
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})
mongoose
.connect("link of mongoodb")
.then( (err) => {console.log(err)} )
.catch(anfn);