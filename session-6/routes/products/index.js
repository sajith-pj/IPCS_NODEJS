var express = require("express");
const Product = require("../../model/Product");
var router = express.Router();

router.get("/add", (req, res) => {
  console.log("asdashjk");
  res.render("products/add");
});

router.post("/add", (req, res) => {
  let data = {
    name: "Iphone",
    category: "Mobile",
    userId: 1,
  };

  Product.create(data)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
