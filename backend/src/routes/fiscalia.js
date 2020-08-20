const { Router } = require("express");
const router = Router();

const Fiscalia = require("../models/Fiscalia");

router.get("/", async(req, res) => {
    const fiscalias = await Fiscalia.find();
    res.json(fiscalias);
});

router.post("/", async(req, res) => {
    const { ubicacion, telefono } = req.body;
    const nuevaFiscalia = new Fiscalia({ ubicacion, telefono });
    await nuevaFiscalia.save();
    res.json({ message: "Nueva fiscalia guardada." });
});

router.delete("/:id", async(req, res) => {    
    await Fiscalia.findByIdAndDelete(req.params.id);
    res.json({ message: "Fiscalia eliminada." });
});



module.exports = router;
