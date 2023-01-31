const menu = document.querySelector('#menu');

function activeScroll(){
    menu.classList.toggle('ativo', scrollY > 815);
}

window.addEventListener('scroll', activeScroll);