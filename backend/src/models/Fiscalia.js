const { Schema, model } = require("mongoose");

const FiscaliaSchema = new Schema({
    nombre: { type: String, required: true},
    ubicacion: { type: String, required: true },
    telefono: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model("Fiscalia", FiscaliaSchema);
