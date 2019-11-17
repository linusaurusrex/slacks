const express = require("express");
const GitHub = require("../services/github");
const models = require("../models");

const router = express.Router();

router.get("/requesting", async function(req, res) {
  const { query = "" } = req.query;

  if (!req.session.access_token) {
    return res.render("tutorial/index");
  }

  let a = await (models.Item.findAll().then(x=>x.filter(b=>b.itemid == req.query.item)))
  let user = req.session.user;
  
  return res.render("exampleItem/index", {
    items: a
  });
});

module.exports = router;
