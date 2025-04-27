function irPagina(id) { //rola ate a pag desejada
    let elemento = document.getElementById(id);
    if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
    }
}


document.getElementById('contatoForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    alert('E-mail enviado com sucesso!');
    this.reset(); // Limpa o formulário
});
