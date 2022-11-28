function moverPosRandom (elem){
    elem.style.position = 'absolute';
    elem.style.top = Math.random() * (window.innerHeight - elem.offsetHeight)+'px';
    elem.style.left = Math.random() * (window.innerWidth - elem.offsetWidth)+'px';
}

let btnYes = document.getElementById("btn-yes");
let btnNo = document.getElementById("btn-no");
let divModoS = document.getElementsByClassName("modoS")[0];

btnNo.addEventListener('mouseenter', (e)=>{
    moverPosRandom(e.target)
})

btnYes.addEventListener('click' , (e) =>{
    alert('Sabía que te gusto la canción');
    divModoS.style.display='block';
    /* 
    para poner un sonido
    const cancion = new Audio('ruta del audio ejm img\\modo...mp3')
    cancion.play();
    */
})