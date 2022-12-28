function moverPosicionRandom(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeigth) + 'px';
    elm.style.top = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divSexMode = document.getElementsByClassName("sex-mode")[0];

btnNo.addEventListener('mouseenter',function(e) { 
    moverPosicionRandom(e.target)
});
btnSi.addEventListener('click',function(e) {
    alert('I knew you would say yes, let\'s go crazy')
    divSexMode.style.display = 'block';
    const cancion = new Audio('Multimedia\\George Michael - Careless Whisper.mp3');
    cancion.play()
});