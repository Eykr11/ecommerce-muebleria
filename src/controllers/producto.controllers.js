import getConnection from "../db/database.js"

const getProductos= async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre FROM productos");
        res.json(result);   
    } catch (error) {
        console.error("ERROR 500")
    }
}



const postProducots = async (req,res) =>{
    try {
        const {Nombre, Descripcion} = (req.body);
        const producto ={
            id,
            Nombre  ,
            Descripcion,
            preciounitario
        
              
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO productos SET ?", producto)



        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const deleteProductos = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM productos WHERE productosid = ?", id);
        
        if(result.affectedRows === 0) {
            return res.status(404).json({message: "Producto no encontrado"});
        }
        
        res.json({message: "Producto eliminado exitosamente"});
    } catch (error) {
        res.status(500).json({message: "Error al eliminar el producto", error: error.message});
    }
}


export const methodHTTP = {
    getProductos,
    postProducots,
    deleteProductos
}