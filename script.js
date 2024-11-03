// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function() {
    // Adiciona evento ao botão de abrir
    document.querySelector(".menu-button").addEventListener("click", w3_open);
    // Adiciona evento ao botão de fechar dentro da sidebar
    document.querySelector("#mySidebar button").addEventListener("click", w3_close);
});

// Função para abrir a barra lateral
function w3_open() {
    document.getElementById("mySidebar").style.display = "block"; // Mostra a barra lateral
}

// Função para fechar a barra lateral
function w3_close() {
    document.getElementById("mySidebar").style.display = "none"; // Esconde a barra lateral
}
