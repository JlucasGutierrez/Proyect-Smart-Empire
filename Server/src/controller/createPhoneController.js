const { Phone } = require("../db") 

exports.CreatePhone = async () => {
    const response = await Phone.Create({id,name,brandNae,price});

    return response;
}