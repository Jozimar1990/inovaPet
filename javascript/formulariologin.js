document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const cpfInput = document.getElementById("cpf");
    const idPetInput = document.getElementById("id-pet");
    const mensagemSucesso = document.getElementById("mensagemSucesso");
    const cpfHelper = document.getElementById("cpf-helper");
    const idPetHelper = document.getElementById("id-pet-helper");

    // Função para validar CPF (formato: XXX.XXX.XXX-XX)
    function validarCPF(cpf) {
        const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return regex.test(cpf);
    }

    // Função para validar ID do Pet (6 números)
    function validarIDPet(idPet) {
        const regex = /^\d{5}$/;
        return regex.test(idPet);
    }

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        
        let valid = true;

        // Validar CPF
        if (!validarCPF(cpfInput.value)) {
            valid = false;
            cpfHelper.textContent = "CPF inválido. Use o formato XXX.XXX.XXX-XX.";
            cpfHelper.style.display = "block";
        } else {
            cpfHelper.style.display = "none";
        }

        // Validar ID Pet
        if (!validarIDPet(idPetInput.value)) {
            valid = false;
            idPetHelper.textContent = "ID do Pet deve ter 6 números.";
            idPetHelper.style.display = "block";
        } else {
            idPetHelper.style.display = "none";
        }

        // Se tudo estiver válido, exibe a mensagem de sucesso
        if (valid) {
            mensagemSucesso.style.display = "block";
            formulario.reset();
        } else {
            mensagemSucesso.style.display = "none";
        }
    });

    // Limpar mensagens de erro ao digitar
    cpfInput.addEventListener("input", function () {
        cpfHelper.style.display = "none";
    });

    idPetInput.addEventListener("input", function () {
        idPetHelper.style.display = "none";
    });
});
