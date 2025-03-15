//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Commit 1: Crie um array para armazenar os nomes
//Commit 2: Implementa uma função para agregar amigos
//Commit 3: Implementa uma função para atualizar a lista de amigos

let listaNomes = [];

function adicionarAmigo(amigo) {
    let nome = document.getElementById('amigo').value;
    if (nome === "") {
        alert("Por favor, insira um Nome!");
    }   else {
        listaNomes.push(nome);
        console.log(listaNomes);
    }
    
    redefinirCampo();
}

function redefinirCampo() {
    document.getElementById('amigo').value = "";
}

