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


let modoLeituraAtivo = false;

const botaoLeitor = document.getElementById('leitor');
const icone = botaoLeitor.querySelector('img');

botaoLeitor.addEventListener('click', () => {
  modoLeituraAtivo = !modoLeituraAtivo;

  botaoLeitor.style.backgroundColor = modoLeituraAtivo ? '#ddd' : '#ddd';

  botaoLeitor.setAttribute('aria-label', modoLeituraAtivo ? 'Parar leitor de tela' : 'Ativar leitor de tela');
  botaoLeitor.setAttribute('title', modoLeituraAtivo ? 'Parar leitor de tela' : 'Ativar leitor de tela');

  icone.src = modoLeituraAtivo ? 'Imagens/cross.png' : 'Imagens/eye (1).png';
});

document.addEventListener('click', function(e) {

  if (!modoLeituraAtivo || e.target.closest('#leitor')) return;

  const texto = e.target.innerText || e.target.alt || e.target.ariaLabel;

  if (texto) {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';
    speechSynthesis.speak(utterance);
  }
});
