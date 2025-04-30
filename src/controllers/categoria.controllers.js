import getConnection from "../db/database.js"

const getCategorias = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre FROM categorias");
        res.json(result);   
    } catch (error) {
        console.error("ERROR 500")
    }
}



const postCategorias = async (req,res) =>{
    try {
        const {Nombre, Descripcion} = (req.body);
        const category ={
            Nombre  ,
            Descripcion
              
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO categorias SET ?", category)



        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const deleteCategory = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM categorias WHERE CategoriaID = ?", id);
        
        if(result.affectedRows === 0) {
            return res.status(404).json({message: "Categoría no encontrada"});
        }
        
        res.json({message: "Categoría eliminada exitosamente"});
    } catch (error) {
        res.status(500).json({message: "Error al eliminar categoría", error: error.message});
    }
}


export const methodHTTP = {
    getCategorias,
    postCategorias,
    deleteCategory
}