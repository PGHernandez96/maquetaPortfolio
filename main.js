const d = document

/* DESPLEGAR ICONOS REDES SOCIALES */

const ENLACES = (mainBtn, textContent, iconsMenu, icon) => {
    d.addEventListener("click", (e) => {
        if(e.target.matches(mainBtn)){
            d.querySelector(textContent).classList.toggle("active")
            d.querySelector(iconsMenu).classList.toggle("active")
        }
        if(e.target.matches(icon)){
            d.querySelector(iconsMenu).classList.remove("active")
            d.querySelector(textContent).classList.remove("active")
        }
    })
}


ENLACES(".network--text", ".network--text", ".icons--container", ".bx") 


/* CAMBIAR LENGUAJE */
