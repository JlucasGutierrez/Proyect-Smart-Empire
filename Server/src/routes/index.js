const { Router } = require("express");
const phoneRouter = require("./phoneRouter");

const router = Router();

router.use("/phone", phoneRouter)


module.exports = router