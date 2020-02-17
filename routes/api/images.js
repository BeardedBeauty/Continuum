const router = require("express").Router();
const image = require("./../../controller/imageController.js");

router.route("/")
    .get(image.findAll)
    .post(image.create);

router.route("/:id").delete(image.remove);
// .get(usersController.findById)
// .put(usersController.update)

module.exports = router;