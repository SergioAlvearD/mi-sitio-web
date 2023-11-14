let boxProductos = document.getElementById("boxProductos");

/* Contenedor para los productos individuales */
let boxProducto = document.createElement("div");
boxProductos.appendChild(boxProducto);
boxProducto.setAttribute("class","box-producto");

/* Contenedor para la imagen */
let boxImagen = document.createElement("div");
boxProducto.appendChild(boxImagen);
boxImagen.setAttribute("class","box-imagen");
let imagenProducto = document.createElement("img");
boxImagen.appendChild(imagenProducto);
imagenProducto.setAttribute("src","img/mazda.jpg");
imagenProducto.setAttribute("class","imagen-producto")

/* Contenedor para la informacion */ 
let infoProducto = document.createElement("div");
boxProducto.appendChild(infoProducto);
infoProducto.setAttribute("class","box-info-producto");

//Marca
let marcaProducto = document.createElement("label");
infoProducto.appendChild(marcaProducto);
let nodoMarcaProducto = document.createTextNode("Mazda");
marcaProducto.appendChild(nodoMarcaProducto);

//Modelo
let modeloProducto = document.createElement("label");
infoProducto.appendChild(modeloProducto);
let nodoModeloProducto = document.createTextNode(" CX-9 2.5 Grand Touring Signature");
marcaProducto.appendChild(nodoModeloProducto);

//Precio
let precioProducto = document.createElement("label");
infoProducto.appendChild(precioProducto);
let nodoPrecioProducto = document.createTextNode(" $165.000.000");
marcaProducto.appendChild(nodoPrecioProducto);

//Año
let añoProducto = document.createElement("label");
infoProducto.appendChild(añoProducto);
let nodoAñoProducto = document.createTextNode(" 2022");
marcaProducto.appendChild(nodoAñoProducto);

//Kilometraje
let kilometrajeProducto = document.createElement("label");
infoProducto.appendChild(kilometrajeProducto);
let nodoKilometrajeProducto = document.createTextNode(" 44007 KM");
marcaProducto.appendChild(nodoKilometrajeProducto);

//Ciudad
let ciudadProducto = document.createElement("label");
infoProducto.appendChild(ciudadProducto);
let nodoCiudadProducto = document.createTextNode(" Fontibon-Bogota D.C.");
marcaProducto.appendChild(nodoCiudadProducto);