const router = require("express").Router();
const javascriptJson = require("../data/javascript.json")

router.get("/", (req, res, next) => {
  res.json(javascriptJson)
})

module.exports = router;