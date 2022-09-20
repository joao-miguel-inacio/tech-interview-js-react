const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const javascriptRoutes = require("./javascript.routes")
router.use("/javascript", javascriptRoutes)

const reactRoutes = require("./react.routes")
router.use("/react", reactRoutes)


module.exports = router;
