// Função para ativar/desativar classe 'ativo' no menu baseado no scroll
function handleScroll() {
  const menu = document.querySelector('#menu');
  menu.classList.toggle('ativo', window.scrollY > 815);
}

// Adicionar evento de scroll para atualizar o menu
window.addEventListener('scroll', handleScroll);

// Botão para voltar ao topo
const btnTop = document.getElementById("top");

btnTop.addEventListener("click", function() {
  window.scrollTo(0, 0);
});

// Função para ocultar botão de voltar ao topo quando o scroll é pequeno
function toggleTopButtonVisibility() {
  const scrollThreshold = 250;
  btnTop.style.display = window.scrollY > scrollThreshold ? "flex" : "none";
}

// Adicionar evento de scroll para ocultar botão de voltar ao topo
document.addEventListener('scroll', toggleTopButtonVisibility);
toggleTopButtonVisibility(); // Chamar a função para configurar o estado inicial

// Adicionar eventos de clique para os botões do menu
const menuButtons = document.querySelectorAll('li a');

menuButtons.forEach(button => {
  button.addEventListener('click', function() {
      const pageName = this.dataset.page;
      navigateToPage(pageName);
  });
});

// Função para mostrar/ocultar menu responsivo
function toggleMenu() {
  const menu = document.querySelector('ul');
  menu.classList.toggle('active');
}
