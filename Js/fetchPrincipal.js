let $figure = document.querySelectorAll(".figure");
let $name = document.querySelectorAll(".name");
let $habilidad = document.querySelectorAll(".habilidad")
let $mov = document.querySelectorAll(".mov")
document.addEventListener("DOMContentLoaded",()=>{
    fetch("https://pokeapi.co/api/v2/pokemon",{
        method:'GET',
    })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let respuesta = json;
        console.log(respuesta);
        for(let i=0; i<respuesta.results.length;i++){
            fetch(respuesta.results[i].url,{
                method:"GET"
            })
            .then(r => r.ok ? r.json() : Promise.reject(r))
            .then(jsonP =>{
                console.log(jsonP);
                $figure[i].src = jsonP.sprites.front_default
                $name[i].innerHTML = `Nombre:${jsonP.forms[0].name}`;
                $habilidad[i].innerHTML = `Habilidad:${jsonP.abilities[0].ability.name}`;
                $mov[i].innerHTML = `Movimiento:${jsonP.moves[0].move.name}`;
            })
            .catch(err => {
                console.log("error Pokemon");
            })
            
        }
        
    })
    .catch(err => {
        console.log("Error")
    })
})
