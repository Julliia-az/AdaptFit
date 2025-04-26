function irPagina(id) { //rola ate a pag desejada
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
    }
    
    bordaPreta();
}

function bordaPreta(){ //coloca a borda preta quando é clicado
    let borda = document.getElementsByClassName("mudar-borda");
    for(let i = 0; i < borda.length; i++){
        borda[i].style.textShadow = `
        1px 1px 0 black,
        -1px -1px 0 black,
        1px -1px 0 black,
        -1px 1px 0 black
    `;
    }
}



document.getElementById('contatoForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    alert('E-mail enviado com sucesso!');
    this.reset(); // Limpa o formulário
});
