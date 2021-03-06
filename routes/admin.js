const path = require("path");
const express = require("express");

const rootDir = require("../helpers/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("Request received", req.url, req.method);
  res.status(200).sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  console.log(req.body, "...redirecting.");
  res.redirect("/shop");
});

module.exports = router;
