const footer = document.querySelector("footer"),
sigaNos = document.createElement("div"),
div =document.createElement("div"),
textSigaNos = document.createElement("p"),
p = document.createElement('p'),
ul = document.createElement('ul')
redesSociais = [
    { icone: "fab fa-facebook", link: "https://www.facebook.com/SeuPerfil"},
    { icone: "fab fa-instagram", link: "https://www.instagram.com/SeuPerfil"},
    { icone: "fa-brands fa-x-twitter", link: "https://www.twitter.com/SeuPerfil"},
    { icone: "fab fa-linkedin", link: "https://www.linkedin.com/in/SeuPerfil"}
    // <i class="fa-brands fa-x-twitter"></i>
];
p.innerHTML = "© 2024 InovaPet. Todos os direitos reservados."
textSigaNos.innerText = "Siga-nos"
for(let i = 0; i < redesSociais.length; i++){
    const li = document.createElement('li');
    const link = document.createElement("a");
    const icon = document.createElement("i");


    link.href = redesSociais[i].link;
    link.target = "_blank"; // Abre o link em uma nova aba
    link.rel = "noopener noreferrer"; // Segurança para links externos

    icon.className = redesSociais[i].icone;

    link.appendChild(icon); // Adiciona o ícone dentro do link
    li.appendChild(link); // Adiciona a tag "a" dentro da tag "li"
    ul.appendChild(li) // Adiciona a tag "li" dentro da "ul"
}
sigaNos.id = "siga-nos"
p.id = "p-footer"
div.appendChild(p);
sigaNos.appendChild(textSigaNos);
sigaNos.appendChild(ul);
footer.appendChild(div);
footer.appendChild(sigaNos); // Adiciona o link ao footer

/**<p>© 2024 InovaPet. Todos os direitos reservados.</p> */

    {/* <i class="fab fa-facebook"></i> <!-- Facebook -->
    <i class="fab fa-whatsapp"></i> <!-- WhatsApp -->
    <i class="fab fa-instagram"></i> <!-- Instagram -->
    <i class="fab fa-twitter"></i> <!-- Twitter -->
    <i class="fab fa-linkedin"></i> <!-- LinkedIn --> */}