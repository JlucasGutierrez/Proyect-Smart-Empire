const { Router } = require("express");
const { createPhone } = require("../handlers/createPhoneHandlre");


const PhoneRouter = Router();

PhoneRouter.post("/", createPhone)

module.exports = PhoneRouter