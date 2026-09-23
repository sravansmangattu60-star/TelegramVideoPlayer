const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/resolve", async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.json({ success: false });
  }

  res.json({
    success: false,
    message: "Direct video URL not available yet"
  });
});

app.listen(PORT, () => {
  console.log("Resolver running on port " + PORT);
});