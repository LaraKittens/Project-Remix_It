const router = require("express").Router();

const userControllers = require("../controllers/userControllers");

const {
  verifyToken,
  adminCheck,
  checkUserId,
  checkRoleOrUserId,
} = require("../controllers/auth");

router.post("/login", userControllers.login);

router.get("/", verifyToken, adminCheck, userControllers.browse);
router.get("/:id", verifyToken, checkRoleOrUserId, userControllers.read);
router.put("/:id", verifyToken, checkUserId, userControllers.edit);
router.post("/", userControllers.add);
router.delete("/:id", verifyToken, checkRoleOrUserId, userControllers.destroy);

module.exports = router;
