const express = require('express');
const app = express();

let empresaRouter= require("./router/empresarouter");
app.use("/",empresaRouter);

let empleadoRouter= require("./router/empleadorouter");
app.use("/",empleadoRouter);

let areaRouter= require("./router/arearouter");
app.use("/",areaRouter);

const PORT = 3007;
app.listen(PORT,()=> {
    console.log(`el servidor esta CORRIENDO EN EL PUERTO: ${PORT}`);
}); 