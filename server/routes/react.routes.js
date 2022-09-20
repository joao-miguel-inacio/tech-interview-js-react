const router = require("express").Router();
const reactJson = require("../data/react.json")

router.get("/", (req, res, next) => {
  res.json(reactJson)
})

module.exports = router;