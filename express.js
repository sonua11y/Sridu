const expess = require('express');

const app = expess();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!');
}   );

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
