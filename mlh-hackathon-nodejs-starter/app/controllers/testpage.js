const express = require("express");

const router = express.Router();

router.get("/testpage", function(req, res) {
  res.render("testpage/index");
});

module.exports = router;
