const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
//   console.log("Request received", req.url, req.method);
  res.send(
    "<form action='/admin/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body, "...redirecting.");
  res.redirect("/shop");
});

module.exports = router;