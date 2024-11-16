const header = document.querySelector("header");
const h2 = document.createElement("h2");
const logo = document.createElement("img")
const paginas = [
    {
        titulo: "Página Inicial",
        href: "index.html"
    },
    {
        titulo: "Planos e Serviços",
        href: "Planos_e_Serviços.html"
    },
    {
        titulo: "Sobre Nós",
        href: "sobre_nos.html"
    },
    {
        titulo: "Minha Conta",
        href: "Minha_conta.html"
    }
];

header.appendChild(logo)
// logo.setAttribute("href", paginas[0].href)
logo.id = "logo-header"
logo.setAttribute("class", "item item1")
logo.setAttribute("src", "imagens/logo_com_fundo_sem_texto_grande.png")
logo.setAttribute("alt", "logo")
paginas.map((el, i)=>{
    const a = document.createElement("a");
    a.setAttribute("href", paginas[i].href)
    a.innerHTML = paginas[i].titulo
    h2.appendChild(a)
});
h2.setAttribute("class", "item item2")
header.appendChild(h2);

/*  
<a href="index.html">Página inicial</a>
<a href="Planos_e_Serviços.html">Planos e Serviços</a>
<a href="sobre_nos.html">Sobre nós</a>
<a href="Minha_conta.html">Minha Conta</a> */