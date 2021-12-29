let $d = document;
$d.addEventListener("DOMContentLoaded",()=>{
    let $antiguoHeader;
    let $header = $d.querySelector(".header");
    if(window.matchMedia("(max-width:830px)")){
       // $antiguoHeader = $header.removeChild($d.querySelector(".header-logo"))
        console.log($antiguoHeader);
    }
    else{
        //$header.insertAdjacentElement(0,$antiguoHeader)
    }
})