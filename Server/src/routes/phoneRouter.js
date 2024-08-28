const { Router } = require("express");
const { createPhone } = require("../handlers/createPhoneHandlre");
const getPhone = require("../handlers/getPhoneHandlre");



const phoneRouter = Router();

phoneRouter.post("/", createPhone)
phoneRouter.get("/", getPhone)

module.exports = phoneRouter