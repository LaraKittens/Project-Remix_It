const express = require("express");

const router = express.Router();

const musicHistoryRoutes = require("./musicHistory.routes");
const musicExampleRoutes = require("./musicExample.routes");
const userRoutes = require("./user.routes");

router.use("/users", userRoutes);

router.use("/musicHistories", musicHistoryRoutes);

router.use("/musicExamples", musicExampleRoutes);

module.exports = router;
