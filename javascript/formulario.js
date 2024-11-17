const contratarBotoes = document.querySelectorAll('.detalhes-toggle');


contratarBotoes.forEach(botao => { // Adicionar evento de clique a cada botão
  botao.addEventListener('click', () => {
    
    const formularioElement = document.getElementById('formulario'); // Selecionar o elemento do formulário

    
    formularioElement.scrollIntoView({ // Rolar a página suavemente até o formulário
      behavior: 'smooth',
      block: 'start'
    });
  });
});

const formulario = document.getElementById('formulario');
const mensagemSucesso = document.getElementById('mensagemSucesso')

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    mensagemSucesso.style.display = 'block';

    formulario.reset();
});