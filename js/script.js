//Funcion que oculta o muestra el menu
let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive"
        menuVisible = true;
    }
}

// Funcion que oculta el meny cuando se hacce click en un elemento
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion para darle el efecto de animacion a las habilidades
function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("ilustrator");
        habilidades[3].classList.add("comunicacion");
        habilidades[4].classList.add("equipo");
        habilidades[5].classList.add("creatividad");
        habilidades[6].classList.add("dedicacion");
    }
}

//Detectamos el Scrolling de la pagina mediante el evento scroll
window.onscroll = function(){
    efectoHabilidades();
}