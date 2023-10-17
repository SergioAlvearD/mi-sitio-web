let boxMinus = document.getElementById("boxMinus");
let boxUnidades = document.getElementById("boxUnidades");
let boxPlus = document.getElementById("boxPlus");
let subTotal = document.getElementById("subTotal");
const valorUnidad = 85000;
const valorUnidadstr = Intl.NumberFormat("de-De").format(valorUnidad);
document.getElementById("precioUnidad").innerHTML = "$" + valorUnidadstr;

boxPlus.addEventListener("click", function(){
    let auxUnidades = parseInt(boxUnidades.innerHTML);
    if(auxUnidades < 10){
        boxUnidades.innerHTML = (auxUnidades + 1).toString();
        let valorSubTotal = parseInt(boxUnidades.innerHTML) * valorUnidad;
        subTotal.innerHTML = Intl.NumberFormat("de-De").format(valorSubTotal);
        if(boxUnidades.innerHTML == 1){
            document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + " Producto";
        }
        else{
            document.getElementById("cantProductos").innerHTML =boxUnidades.innerHTML + " Productos";
        }
    };
});

boxMinus.addEventListener("click", function(){
    let auxUnidades = parseInt(boxUnidades.innerHTML);
    if(auxUnidades > 0){
        boxUnidades.innerHTML = (auxUnidades - 1).toString();
        let valorSubTotal = parseInt(boxUnidades.innerHTML) * valorUnidad;
        subTotal.innerHTML = Intl.NumberFormat("de-De").format(valorSubTotal);
        if(boxUnidades.innerHTML == 1){
            document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + " Producto";
        }
        else{
            document.getElementById("cantProductos").innerHTML =boxUnidades.innerHTML + " Productos";
        }
    };
});