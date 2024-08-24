const { Router } = require("express");
const { createPhone } = require("../handlers/createPhoneHandlre");


const phoneRouter = Router();

phoneRouter.post("/", createPhone)

module.exports = phoneRouter