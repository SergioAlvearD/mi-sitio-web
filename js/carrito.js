let boxMinus = document.getElementById("boxMinus");
let boxUnidades = document.getElementById("boxUnidades");
let boxPlus = document.getElementById("boxPlus");

boxPlus.addEventListener("click", function(){
    let auxUnidades = parseInt(boxUnidades.innerHTML);
    if(auxUnidades < 10){
        boxUnidades.innerHTML = (auxUnidades + 1).toString();
    };
});

boxMinus.addEventListener("click", function(){
    let auxUnidades = parseInt(boxUnidades.innerHTML);
    if(auxUnidades >0){
        boxUnidades.innerHTML = (auxUnidades - 1).toString();
    }
});