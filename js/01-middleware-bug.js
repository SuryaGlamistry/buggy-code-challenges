const express = require('express');
const app = express();

function logger(req, res, next) {
  console.log("Request received at: " + Date.now());
}

app.use(logger);

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => console.log("Server running on port 3000"));
