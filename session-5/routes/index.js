var express = require("express");
var router = express.Router();
var db = require("../config/connection");
/* GET home page. */
router.get("/", function (req, res, next) {
  db.get()
    .collection("products")
    .find({})
    .toArray()
    .then((result) => {
      res.render("products/index", { products: result });
    });
});

router.get("/add-product", function (req, res, next) {
  res.render("products/add");
});

router.post("/add-product", (req, res) => {
  console.log(req.body);

  db.get()
    .collection("products")
    .insertOne(req.body)
    .then((result) => {
      console.log(result);
      res.redirect("/");
    });
});
module.exports = router;
