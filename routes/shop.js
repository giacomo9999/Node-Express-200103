const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Request received", req.url, req.method);
  res.send("<h1>Welcome to Express</h1>");
});

module.exports = router;
