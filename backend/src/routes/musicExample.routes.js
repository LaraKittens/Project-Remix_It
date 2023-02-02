const router = require("express").Router();

const musicExampleControllers = require("../controllers/musicExampleControllers");
const dataCheck = require("../controllers/dataCheck");

router.get("/", musicExampleControllers.browse);
router.get("/:id", musicExampleControllers.read);
router.put(
  "/:id",
  dataCheck.musicExampleCheckUpdate,
  musicExampleControllers.edit
);
router.post(
  "/",
  dataCheck.musicExampleCheckCreation,
  musicExampleControllers.add
);
router.delete("/:id", musicExampleControllers.destroy);

module.exports = router;
