const express = require("express");

const router = express.Router();

router.get("/", async function(req, res) {
  const { item = "" } = req.query;

  res.render("exampleitem/index");
});

module.exports = router;
