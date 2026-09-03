import express from "express";
const app = express();
const PORT = 9999;
app.use(express.json());

app.get("/", (request, response) => {
  response.json({ message: "Reading" });
});

app.post("/", (request, response) => {
  response.json({ message: "Posted", data: request.body });
});

app.put("/", (request, response) => {
  response.json({ message: "Updated", data: request.body });
});

app.delete("/", (request, response) => {
  response.json({ message: "Deleted" });
});

app.listen(PORT, () => {
  console.log(`Hello world from server ${PORT}`);
});
