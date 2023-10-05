var express = require("express");
var router = express.Router();
var db = require("../config/connection");
var { ObjectId } = require("mongodb");
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

// for rendering a hbs file tyou have to add a get route

router.get("/edit-product/:id", (req, res) => {
  const { id } = req.params;
  db.get()
    .collection("products")
    .findOne({ _id: new ObjectId(id) })
    .then((result) => {
      res.render("products/edit", { product: result });
    });
});

//  UPDATE PRODUCT
router.post("/edit-prodcut/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db
      .get()
      .collection("products")
      .updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: req.body,
        }
      );
    res.redirect("/");
  } catch (err) {
    res.redirect("/edit-product/" + id);
  }
});

router.post("/remove-product/:id", (req, res) => {
  const { id } = req.params;

  db.get()
    .collection("products")
    .deleteOne({ _id: new ObjectId(id) })
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: "Product deleetd successfully" });
    })
    .catch((error) => {
      res.status(200).json({ message: "Something went wrong" });
    });
});

module.exports = router;
