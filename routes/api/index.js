const router = require("express").Router();
const ImageRoute = require("./images.js");

// user routes
router.use("/images", ImageRoute);

module.exports = router;