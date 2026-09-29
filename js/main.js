window.onload=gestionarEventos;

function gestionarEventos(){
    //Ejercicio 1
    let imgPrincipal = document.getElementsByClassName("photo");
    imgPrincipal[0].addEventListener('click', imgPClick);

    //Ejercicio 2
    let btNav = document.getElementsByClassName("navbutton");
    btNav.forEach(bt => bt.addEventListener('click',()=>{navClick(bt)}));
}

function imgPClick(){
    console.log("Imagen pulsada");
}

function navClick(bt){
    window.alert("Redirigiendo a ", );
}