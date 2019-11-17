const express = require("express");
const models = require("../models");

const router = express.Router();

router.get("/", async function(req, res) {
  const { item = "" } = req.query;

/*  if (!req.session.access_token) {
    return res.render("index");
  }*/

  let a = await (models.Item.findAll().then(x=>x.filter(b=>b.itemid == req.query.item)))
  let user = req.session.user;
  return res.render("exampleitem/index", {
    items: a
  });
});

module.exports = router;
