import express from 'express';

const app = express();
const port = 3000;

app.use(express.json)
app.use(express.encoded())

app.listen(port, () => {
  console.log(`Running time hhahah${port}`);
});

const booklist = [
  { item: 'book', quantity: 1 },
  { item: 'name of book', quantity: 2 },
  { item: 'notebooks', quantity: 3 }
];

app.get('/books', (req, res) => {
  res.send(booklist);
});

app.post('/books', (req, res) => {
  console.log(req.body); 
  res.sendStatus(201);
});
