const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Register route");
});

module.exports = router;
