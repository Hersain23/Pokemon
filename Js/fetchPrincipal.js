//let $figure = document.querySelectorAll(".figure");
//let $name = document.querySelectorAll(".name");
//let $habilidad = document.querySelectorAll(".habilidad")
//let $mov = document.querySelectorAll(".mov")
let $main = document.querySelector(".main");
let $containerMain = document.querySelector(".container-main");
let $template = ""
let $carga = document.querySelectorAll(".carga");
let bandera = false;
async function getUrlPokemon(urlPokemones){
    for(let i=0;i<20;i++){
        let resPokemon = await fetch(urlPokemones.results[i].url)
        let p = await resPokemon.json();
        setInfo(p);  
    }
}

async function getListaPokemon(url){
    let primeraRespuesta = await fetch(url);
    primerJson = await primeraRespuesta.json();
    //console.log("Primera peticion");
    //console.log(primerJson);
    for(let i=0;i<20;i++){
        let resPokemon = await fetch(primerJson.results[i].url)
        let pokemones = await resPokemon.json();
        console.log("Segunda peticion");
        let nombre = pokemones.species.name;
        let imagen = pokemones.sprites.front_default
        let nameHabilidad = pokemones.abilities[0].ability.name
        let resHabilidades = await fetch(pokemones.abilities[0].ability.url)
        let habilidades = await resHabilidades.json();
        let descHabilidad = habilidades.effect_entries[0].effect;

        $template +=`
        <section class="container-main-section">
                <figure>
                    <div class="imagen">
                        <img src="${imagen}" alt="" class="figure">
                    </div>
                    <div class="nombre">
                        <p class="name">NOMBRE:${nombre.toUpperCase()}</p>
                    </div>
                    <div class="informacion">
                        <p class="habilidad">${nameHabilidad.toUpperCase()}:${descHabilidad}</p>
                    </div>
                    
                </figure>
            </section>`
        if(i == 19){
            bandera = true;
        }
    }
    if(bandera == true){
        $main.style.display="none"
        document.querySelector(".header").style.display="inline-flex"
        document.querySelector(".container").style.display="inline-flex"
    }
    $containerMain.innerHTML = $template;

}
document.addEventListener("DOMContentLoaded",getListaPokemon("https://pokeapi.co/api/v2/pokemon"));
