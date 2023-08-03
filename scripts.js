var boton = document.getElementById("igr");
boton.addEventListener("click", () => {
    if (boton.textContent === "INGRESAR")
        boton.textContent = "SALIR";
    else
    boton.textContent = "INGRESAR";
})

const titulo = document.getElementById("t1");
titulo.addEventListener("mouseover", () => {
    titulo.style.color =
    titulo.style.color = "#ffffff" ? "aqua" : "#ffffff"
})