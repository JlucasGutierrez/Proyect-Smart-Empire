const { Phone } = require("../db")
const getPhones = async () => {
    
    const dbPhones = await Phone.findAll({});

    const phones = dbPhones.map((phone) => {
        return{
            id: phone.id,
            name: phone.name,
        }
    })

    return phones;
} 

module.exports = {getPhones}