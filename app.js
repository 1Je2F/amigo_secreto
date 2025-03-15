//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Commit 1: Crie um array para armazenar os nomes
//Commit 2: Implementa uma função para agregar amigos
<<<<<<< HEAD
=======
//Commit 3: Implementa uma função para atualizar a lista de amigos

>>>>>>> parent of 71377f5 (entrega da quarta funcionalidade)
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

<<<<<<< HEAD
=======
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < listaNomes.length; i++) {
        lista.innerHTML += "<li>" + listaNomes[i] + "</li>";
    }
}
>>>>>>> parent of 71377f5 (entrega da quarta funcionalidade)
