let $d = document;
let click = 0;
$d.addEventListener("DOMContentLoaded",()=>{
    let buscador = $d.querySelector(".header-buscador")
    let btn = $d.getElementById("btn")
    let logo = $d.querySelector(".header-logo")
    console.log(buscador);
    if(window.matchMedia("(max-width:830px)")){
        btn.addEventListener("click",()=>{
            if(click == 0){
            document.querySelector("input").style.visibility="visible"
            click = 1;
            console.log(click);
            }
            else if(click == 1){
                document.querySelector("input").style.visibility="hidden"
                click = 0;
                console.log(click);

            }
        })
    }
})