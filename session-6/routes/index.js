var express = require("express");
const Product = require("../model/Product");
var router = express.Router();

router.get("/", (req, res) => {
  Product.find({ isDeleted: false })
    .then((results) => {
      res.render("products/index", { products: results });
    })
    .catch((err) => {
      res.render("products/index", { products: [] });
    });
});

router.get("/products/add", (req, res) => {
  res.render("products/add");
});

router.post("/products/add", (req, res) => {
  Product.create(req.body)
    .then((result) => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
});

// EDIT PAGE
router.get("/product/edit/:id", (req, res) => {
  const { id } = req.params;

  Product.findById(id)
    .then((result) => {
      res.render("products/edit", { product: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/product/edit/:id", (req, res) => {
  const { id } = req.params;
  Product.updateOne({ _id: id }, { $set: req.body })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.render("products/edit", { product: {} });
    });
});

router.post("/product/edit/:id", (req, res) => {
  const { id } = req.params;
  Product.updateOne({ _id: id }, { $set: req.body })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.render("products/edit", { product: {} });
    });
});

router.put("/product/delete/:id", (req, res) => {
  const { id } = req.params;
  Product.updateOne(
    { _id: id },
    { $set: { isDeleted: true } },
    { upsert: true }
  )
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.render("products/edit", { product: {} });
    });
});

module.exports = router;
