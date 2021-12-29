import {nombres} from "./fetchPrincipal.js"
let coincidencias = [],pos=0;
const $input =  document.getElementById("filtro"); // selecciono el input

$input.addEventListener("input",(e)=>{
    const $imagenes = document.querySelectorAll(".pokemon");
    console.log($imagenes); 

    let nombre = $input.value.valueOf();
    let expresion = new RegExp(nombre);
    for(let i=0;i<nombres.length;i++){
        if(expresion.test(nombres[i].nombre)){
            coincidencias[pos] = nombres[i].indice;
            $imagenes[coincidencias[pos]].style.display = "inline-flex";
            pos++
        }
        else{
            $imagenes[i].style.display="none";
        }
    }
    coincidencias.length = 0;
    pos=0;
});

