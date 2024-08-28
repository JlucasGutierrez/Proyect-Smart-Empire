const  { getPhones } = require("../controller/getPhoneController")

const getPhone = async(req,res) => {
    try{
        const phone = await getPhones();
        res.status(200).json(phone)
    }catch (error){
        res.status(404).json({error: error.message})
    }
};

module.exports = getPhone;