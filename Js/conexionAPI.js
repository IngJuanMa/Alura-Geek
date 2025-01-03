// const BASE_URL = "https://my-json-server.typicode.com/IngJuanMa/AluraGeek/db";
 
 
 async function ListaProdutos(){
    const conexion = await fetch("https://my-json-server.typicode.com/IngJuanMa/AluraGeek/db");
    const conexionConvertida = conexion.json(); 
    return conexionConvertida;
}


async function enviarProducto(imagen,nombre,precio,marca){
    const conexion = await fetch(BASE_URL,{
        method:"POST",
        headers:{"content-type":"aplication/json"},
        body:JSON.stringify({
            nombre:nombre,
            marca:marca,
            precio:precio,
            imagen:imagen
        })
    })
    const conexionConvertida = conexion.json();

    if (!conexion.ok){
        throw new Error("Ha ocurrido un error al envíar el producto");
    }
    return conexionConvertida;
}

async function buscarProducto(palabraClave){
    const conexion = await fetch(`http://localhost:3001/productos?q=${palabraClave}`);
    const conexionCorregida = conexion.json();

    return conexionCorregida;
}

 
// const borrarProducto = async  ( id) => {
//     try {
//       await fetch(`${BASE_URL}:${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       console.log(`Producto con id ${id} eliminado exitosamente`);
//     } catch (error) {
//       console.error("Error en la solicitud DELETE:", error);
//     }
//   };

async function borrarProducto (id){
  try {
   await fetch(`${BASE_URL}:${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
         },
        });
          alert(`Producto con id ${id} eliminado exitosamente`);
     } catch (error) {
          console.error("Error en la solicitud DELETE:", error);
         }
     };

export const conexionAPI={
     ListaProdutos, enviarProducto,buscarProducto,borrarProducto,
}

