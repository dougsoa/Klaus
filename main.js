const menu = document.querySelector('#menu');

function activeScroll(){
    menu.classList.toggle('ativo', scrollY > 815);
}

window.addEventListener('scroll', activeScroll);

// fazer o botão Up ir ao topo 
const btn = document.getElementById("top")

btn.addEventListener("click", function() {
  window.scrollTo(0,0)
})

// função para o botão Up desaparecer no topo
document.addEventListener('scroll', ocultar)

function ocultar() {
  if(window.scrollY > 250) {
    btn.style.display = "flex"
  } else {
    btn.style.display = "none"
  }
}
 ocultar()


// FUNÇÃO PARA QUE O ONCLICK ADD AOS BOTÕES DO MENU DIRECIONEM PARA SEUS RESPECTIVOS CAMINHOS
function index() {
    window.location = "index.html" ;
  }
  
  function projetos() {
    window.location = "projetos.html" ;
  }
  
  function galeria() {
    window.location = "galeria.html" ;
  }
    
  function loja() {
    window.location = "loja.html" ;
  }
    
  function contato() {
    window.location = "contato.html" ;
  }