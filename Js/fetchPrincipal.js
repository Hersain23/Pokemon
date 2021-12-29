let $main = document.querySelector(".main");
let $containerMain = document.querySelector(".container-main");
let $template = ""
let $header = document.querySelector(".header")
let $container = document.querySelector(".container")
document.addEventListener("DOMContentLoaded",getListaPokemon("https://pokeapi.co/api/v2/pokemon"));
let nombres = [];
let i=0;
async function getListaPokemon(url){
    let primeraRespuesta = await fetch(url);
    let primerJson = await primeraRespuesta.json();
    primerJson.results.forEach(element => {
        getPokemon(element.url)
        nombres.push({"indice":i,"nombre":element.name})
        i++;
    });
}
export {nombres}

function setPokemon(pokemon){
    $template += `<a href="#" class="pokemon">
    <div class="imagen">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.moves.name}">
    </div>
    <div class="nombre">
        ${pokemon.species.name.toUpperCase()}
    </div>
    <div class="info">
        <div class="info-parte">
            <p>Hp</p>
            <p>${pokemon.stats[0].base_stat}</p>
        </div>
        <div class="info-parte">
            <p>Attack</p>
            <p>${pokemon.stats[1].base_stat}</p>
        </div>
        <div class="info-parte">
            <p>Def</p>
            <p>${pokemon.stats[2].base_stat}</p>
        </div>
        <div class="info-parte">
            <p>Esp</p>
            <p>${pokemon.stats[3].base_stat}</p>
        </div>
    </div>
</a>`
$containerMain.innerHTML = $template
deleteLoaded()

}
async function getPokemon(url){
    let segundaRespuesta = await fetch(url)
    let pokemon = await segundaRespuesta.json();
    //console.log(pokemon);
    setPokemon(pokemon)
}
function deleteLoaded(){
    $main.style.display="none"
    $header.style.display="inline-flex"
    $container.style.display="inline-flex"
}

