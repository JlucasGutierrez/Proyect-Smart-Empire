const { createPhone } = require("../controller/createPhoneController");

exports.createPhone = async (req, res) => {
    const { name } = req.body;
    try {
        const newPhone = await createPhone( name );
        res.status(201).json(newPhone);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}