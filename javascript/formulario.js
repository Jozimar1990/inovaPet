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

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");
  const inputs = formulario.querySelectorAll("input");
  const helperTexts = formulario.querySelectorAll(".helper-text");
  const mensagemSucesso = document.getElementById("mensagemSucesso");

  formulario.addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      let valid = true; // Flag para verificar se o formulário é válido

      inputs.forEach((input, index) => {
          const helperText = helperTexts[index]; // Correspondente para cada input

          // Verifica se tem helperText 
          if (helperText) {
              // Reseta mensagens de erro/estilos
              input.style.borderColor = "";
              helperText.textContent = "";
          }

          // Verifica se tá vazio
          if (input.value.trim() === "") {
              valid = false;
              input.style.borderColor = "lightcoral";
              if (helperText) {
                  helperText.textContent = "Este campo é obrigatório.";
                  helperText.style.color = "lightcoral";
              }
              return;
          }

          // Validação de e-mail
          if (input.type === "email") {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(input.value)) {
                  valid = false;
                  input.style.borderColor = "lightcoral";
                  if (helperText) {
                      helperText.textContent = "Por favor, insira um e-mail válido.";
                      helperText.style.color = "lightcoral";
                  }
              }
          }

          // Validação de telefone
          if (input.type === "tel") {
              const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
              if (!phoneRegex.test(input.value)) {
                  valid = false;
                  input.style.borderColor = "lightcoral";
                  if (helperText) {
                      helperText.textContent = "Por favor, insira um telefone válido.";
                      helperText.style.color = "lightcoral";
                  }
              }
          }
      });

      // Exibir mensagem de sucesso se o formulário for válido
      if (valid) {
          mensagemSucesso.style.display = "block";  // Exibir mensagem de sucesso
          formulario.reset();  // Limpar o formulário
      }
  });

  // Remove mensagem de erro 
  inputs.forEach((input, index) => {
      input.addEventListener("input", function () {
          const helperText = helperTexts[index];
          input.style.borderColor = ""; 
          if (helperText) {
              helperText.textContent = ""; 
          }
      });
  });
});
