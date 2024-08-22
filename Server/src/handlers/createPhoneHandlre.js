const { CreatePhone } = require("../controller/createPhoneController");

exports.createPhone = async (req, res) => {
    const {id,name,brandName,price} = req.body;
    try {
        const newPhone = await CreatePhone(id,name,brandName,price);
        res.status(201).json(newPhone);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}