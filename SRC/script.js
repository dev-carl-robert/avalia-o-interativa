const submit = document.getElementById("submit");
const pages__one = document.querySelectorAll(".primary__page");
const pages__two = document.querySelectorAll(".second__page");

submit.addEventListener("click", function () {
    pages__one.forEach(function (page) {
        page.classList.remove("actived");
        page.classList.add("disable")
    });

    pages__two.forEach(function (page) {
        page.classList.remove("second__page")
        page.classList.add("actived");
    });
});

const backButton = document.getElementById("back__button");

backButton.addEventListener("click", function () {
    pages__two.forEach(function (page) {
        page.classList.remove("actived");
        page.classList.add("second__page")
    });

    pages__one.forEach(function (page) {
        page.classList.remove("disable");
        page.classList.add("actived");
    })
})


// botões de avaliação 

let selectedRating = 0; // Variável para armazenar a seleção do usuário

// botões de avaliação
function gravarClique(botaoId) {
    console.log(` botão clicado foi ${botaoId}`);
    selectedRating = parseInt(botaoId); // Converte o texto do botão para um número
    atualizarTextoAvaliacao(); // Atualiza o texto na segunda página
}

let botoesGrupo = document.getElementsByClassName('botaogrupo');

for (let i = 0; i < botoesGrupo.length; i++) {
    botoesGrupo[i].addEventListener('click', function (event) {
        // Obtendo o texto do botão clicado
        let botaoTexto = event.target.textContent.trim();
        gravarClique(botaoTexto);
    });
}

// Função para atualizar o texto na segunda página
function atualizarTextoAvaliacao() {
    let textRating = `You selected ${selectedRating} out of 5`;
    document.getElementById("rating").textContent = textRating;
    console.log(textRating);
}

