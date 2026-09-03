const express = require("express");
const app = express();
const PORT = 9999;
app.use(express.json());

app.get("/", (request, response) => {
  response.json({ message: "Hello api running" });
});

app.post("/", (request, response) => {
  response.json({ message: "Item created", data: request.body });
});

app.put("/", (request, response) => {
  response.json({ message: "Item updated", data: request.body });
});

app.delete("/", (request, response) => {
  response.json({ message: "Item deleted" });
});

app.listen(PORT, () => {
  console.log(`Hello world from server ${PORT}`);
});
