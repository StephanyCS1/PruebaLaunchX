let parrafo = document.getElementById("parrafoinicial");

console.log(parrafo);

parrafo.onclick = function(){
    cambiaColorFondoYText();
}


function cambiaColorFondoYText() {

    const color = [
        "red",
        "blue",
        "black",
        "cian",
        "purple",
        "yellow",
        "green",
    ];
    parrafo.style.color = color[Math.floor(Math.random()*color.length )]
//     parrafo.style.backgroundColor = "blue";
//     parrafo.style.color= "white";
//     alert("Hola")
}