const express = require("express");
const app = express();

let { junkyardBeasts } = require("./data");

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({ success: true, payload: junkyardBeasts });
});

app.post("/", async (req, res) => {
  const { body } = req;
  junkyardBeasts = [...junkyardBeasts, body];
  const newBeast = junkyardBeasts[junkyardBeasts.length - 1];
  res.json({ success: true, payload: newBeast });
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    index = junkyardBeasts.findIndex(({ number }) => number === id);
    return res.json({ success: true, payload: junkyardBeasts[index] });
  } catch (error) {
    return res.status(404).json({ success: false, error: error.message });
  }
});

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const index = junkyardBeasts.findIndex(({ number }) => number === id);
  junkyardBeasts = [
    ...junkyardBeasts.slice(0, index),
    body,
    ...junkyardBeasts.slice(index + 1),
  ];
  res.json({ success: true, payload: junkyardBeasts[index] });
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const index = junkyardBeasts.findIndex(({ number }) => number === id);
  junkyardBeasts = [
    ...junkyardBeasts.slice(0, index),
    ...junkyardBeasts.slice(index + 1),
  ];
  res.json({ success: true, payload: junkyardBeasts });
});

module.exports = app;
