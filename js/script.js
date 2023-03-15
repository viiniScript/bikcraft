// Ativar links do menu

const linksMenu = document.querySelectorAll(".header-menu a");
const urlPagina = document.location.href;

/** @param {Element} item */
function verificarUrl(item) {
    const urlLink = item.href;
    if(urlPagina.includes(urlLink)) {
        // console.log(item)
        item.style.color = "var(--cor-p1)";
        item.classList.add("ativo")
    };
};
linksMenu.forEach(verificarUrl);

// Ativar links do orçamento

console.log(window.location.search);
const parametrosUrl = new URLSearchParams(location.search)

parametrosUrl.forEach((value) => {
    // console.log(value);

    const elemento = document.getElementById(value)
    if(elemento) {
        elemento.checked = true
    }
});

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button")

/** @param {MouseEvent} event */
function ativarPergunta(event) {
    
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute('aria-controls')
    const resposta = document.getElementById(controls)
    
    resposta.classList.toggle("ativa")
    const ativa = resposta.classList.contains("ativa")
    pergunta.setAttribute("aria-expanded", ativa)

}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta)
}

perguntas.forEach(eventosPerguntas)

// Galeria

const bicicletas = document.querySelectorAll(".bicicleta-imagens img")
const bicicletasContainer = document.querySelector(".bicicleta-imagens")


function ativarBicicleta(bicicleta) {
    bicicleta.addEventListener("click", exibirBicicleta)
    
}

/** @param {MouseEvent} event */
function exibirBicicleta(event) {
    const img = event.currentTarget

    const mql = matchMedia("(min-width: 1000px)").matches

    if(mql) {
        bicicletasContainer.prepend(img)
    }
    console.log(img);
}

bicicletas.forEach(ativarBicicleta)

if(window.SimpleAnime) {
    new SimpleAnime()
}
