 import express from "express";
 import categoriaRouters from "./routers/categorias.routers.js"

 const app = express();

 app.set("port",5000)

app.use("/api/categorias",categoriaRouters)

 export default app;