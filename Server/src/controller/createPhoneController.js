const { Phone, Brand} = require("../db");

exports.createPhone = async (name) => {
    const response = await Phone.create({
        name
    });

    return response;
};