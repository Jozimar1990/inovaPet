const header = document.querySelector("header");
const h2 = document.createElement("h2");
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


paginas.map((el, i)=>{
    const a = document.createElement("a");
    a.setAttribute("href", paginas[i].href)
    a.innerHTML = paginas[i].titulo
    h2.appendChild(a)
});
header.appendChild(h2);

/*  
<a href="index.html">Página inicial</a>
<a href="Planos_e_Serviços.html">Planos e Serviços</a>
<a href="sobre_nos.html">Sobre nós</a>
<a href="Minha_conta.html">Minha Conta</a> */