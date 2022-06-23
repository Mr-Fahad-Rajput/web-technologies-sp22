const express = require('express');
const app = express();
const recipes=["falooda", " kabali pulao" , "burger"];
app.use(express.json());



console.clear();
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/recipes', function (req, res) {
  res.send(recipes);
});
app.get('/recipes/:index', function (req, res) {
  if(!recipes[req.params.index]){
    return res.status(400).send("Recipe Not Found");
  }
  res.send(recipes[req.params.index]);
});
app.put('/recipes/:index', function (req, res) {
  if(!recipes[req.params.index]){
    return res.status(400).send("Recipe Not Found");
  }
  recipes[req.params.index] = req.body.name;
  res.send(recipes[req.params.index]);
});
app.delete('/recipes/:index', function (req, res) {
  if(!recipes[req.params.index]){
    return res.status(400).send("Recipe Not Found");
  }
  recipes.splice(req.params.index,1);
  res.send(recipes);
});
app.post('/recipes/', function (req, res) {

  recipes.push(req.body.name);
  res.send(recipes);
});

app.listen(3000)