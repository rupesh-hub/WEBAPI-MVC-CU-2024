const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors("http://localhost:4200"));
app.use(express.json());

app.get("/test", (req, res) => {
  res.json({'message':'Hello from backend!!'});
});

app.post("/test", (req, res) => {
  const { message } = req.body;
  console.log(message);

  res.json(`{'message':${message}}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
