class Automovil{
    constructor (marca, modelo, precio, anyo, kilometros, cuidad, imagen){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.anyo = anyo;
        this.kilometros =kilometros;
        this.ciudad = cuidad;
        this.imagen = imagen;
    }
}



let auto1 = new Automovil("Mazda", "CX-9 2.5 Grand Touring Signature", "$165.000.000", "2022", "44007 KM", "Fontibon-Bogota D.C.", "img/mazda.jpg");
let auto2 = new Automovil("Toyota", "TXL", "$210.000.000", "2021", "14300 KM","Tulua - Valle", "img/toyota.jpg");
let auto3 = new Automovil("Toyota","Coroya","$115.000.000","2023","15300 KM","Bogota D.C.","img/toyotaC.jpg")
let boxProductos = document.getElementById("boxProductos");

let inputBusqueda = document.getElementById("inputBusqueda").value;

window.addEventListener("keydown", (event) =>{
    if(event.key == "Enter"){
        if(inputBusqueda.innerHTML == "Toyota"){
        cargarAutomovil(auto2);
        cargarAutomovil(auto3);
        }
    }
});

cargarAutomovil(auto1);





function cargarAutomovil(auto){
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
imagenProducto.setAttribute("src",auto.imagen);
imagenProducto.setAttribute("class","imagen-producto")

/* Contenedor para la informacion */ 
let infoProducto = document.createElement("div");
boxProducto.appendChild(infoProducto);
infoProducto.setAttribute("class","box-info-producto");

//Marca
let marcaProducto = document.createElement("label");
infoProducto.appendChild(marcaProducto);
let nodoMarcaProducto = document.createTextNode(auto.marca + " ");
marcaProducto.appendChild(nodoMarcaProducto);
marcaProducto.setAttribute("class", "marca-producto")

//Modelo
let modeloProducto = document.createElement("label");
infoProducto.appendChild(modeloProducto);
let nodoModeloProducto = document.createTextNode(auto.modelo);
modeloProducto.appendChild(nodoModeloProducto);
modeloProducto.setAttribute("class", "modelo-producto")

//Precio
let precioProducto = document.createElement("label");
infoProducto.appendChild(precioProducto);
let nodoPrecioProducto = document.createTextNode(auto.precio);
precioProducto.appendChild(nodoPrecioProducto);
precioProducto.setAttribute("class", "precio-producto")

//Año
let anyoProducto = document.createElement("label");
infoProducto.appendChild(anyoProducto);
let nodoAnyoProducto = document.createTextNode(auto.anyo + " · ");
anyoProducto.appendChild(nodoAnyoProducto);
anyoProducto.setAttribute("class","anyo-producto");

//Kilometraje
let kilometrajeProducto = document.createElement("label");
infoProducto.appendChild(kilometrajeProducto);
let nodoKilometrajeProducto = document.createTextNode(auto.kilometros + " · ");
kilometrajeProducto.appendChild(nodoKilometrajeProducto);
kilometrajeProducto.setAttribute("class","kilometraje");

//Ciudad
let ciudadProducto = document.createElement("label");
infoProducto.appendChild(ciudadProducto);
let nodoCiudadProducto = document.createTextNode(auto.ciudad);
ciudadProducto.appendChild(nodoCiudadProducto);
ciudadProducto.setAttribute("class","ciudad");
}




