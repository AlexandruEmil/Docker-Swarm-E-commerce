const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.get('/products', (req, res) => {
  res.json([{ id: 1, name: "Laptop" }, { id: 2, name: "Phone" }]);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
