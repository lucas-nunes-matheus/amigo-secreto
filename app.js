//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if(!amigo) {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    console.log(amigos)
    atualizaListaAmigos();
    return
}

function atualizaListaAmigos() {
    let lista = document.querySelector(".name-list");
    lista.innerHTML = "";
    for(i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(amigo));
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (!amigos) {
        alert("É necessário adicionar pelo menos 1 amigo.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()*20);
    let amigoSorteado = amigos[indiceAleatorio%amigos.length];
    
    let resultado = document.querySelector('.result-list');
    resultado.innerHTML = amigoSorteado;
    return;
}