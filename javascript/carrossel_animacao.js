let count = 1;
document.getElementById("radio1").checked = true;
setInterval(() => {
    count = (count > 4) ? count = 1: count + 1; // se count for > 4, count recebe 1, senão, count = count + 1
    document.getElementById("radio" + count).checked = true; // Seleciona o botão de rádio correspondente
}, 4000);