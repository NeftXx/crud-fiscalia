if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}

const express = require("express");
const morgan = require('morgan');
const path = require("path");

// Inicializacion
const app = express();
const PORT = process.env.PORT || 3000;
require("./database");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false })); // formulario, para interpretar los datos como json
app.use(express.json());

// Rutas
app.use("/api/fiscalias", require("./routes/fiscalia"));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Inicio del servidor
app.listen(PORT, () => {
    console.log('Servidor en puerto', PORT);
});
