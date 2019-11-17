const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
  res.render("buypants/index");
});

module.exports = router;