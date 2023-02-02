const router = require("express").Router();

const { adminCheck, verifyToken } = require("../controllers/auth");
const musicHistoryControllers = require("../controllers/musicHistoryControllers");
const dataCheck = require("../controllers/dataCheck");

router.get("/", musicHistoryControllers.browse);
router.get("/:id", musicHistoryControllers.read);

router.use(verifyToken, adminCheck);

router.put("/:id", dataCheck.exerciceCheckUpdate, musicHistoryControllers.edit);
router.post("/", dataCheck.exerciceCheckCreation, musicHistoryControllers.add);
router.delete("/:id", musicHistoryControllers.destroy);

module.exports = router;
