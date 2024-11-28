var express = require("express");
var cors = require("cors");
var app = express();

const port = 3000;

// app.use(express.json());
app.use(cors());

// Example route
app.get("/test", (req, res) => {
  res.json({ message: "Hello, Express!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});s
