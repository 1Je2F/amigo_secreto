//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Commit 1: Crie um array para armazenar os nomes
//Commit 2: Implementa uma função para agregar amigos
//Commit 3: Implementa uma função para atualizar a lista de amigos
//Commit 4 - Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.

let listaNomes = [];

function adicionarAmigo(amigo) {
    let nome = document.getElementById('amigo').value;
    if (nome === "") {
        alert("Por favor, insira um Nome!");
    }   else {
        listaNomes.push(nome);
        console.log(listaNomes);
        
        redefinirCampo();
        atualizarLista();
    }
}

function redefinirCampo() {
    document.getElementById('amigo').value = "";
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < listaNomes.length; i++) {
        lista.innerHTML += "<li>" + listaNomes[i] + "</li>";
    }
}

function sortearAmigo() {
    if (listaNomes.length === 0) {
        alert("Por favor, adicione um amigo antes de sortear!");
    }
    else {
        sortearIndice();
    }
}

function sortearIndice() {
        let indice = Math.floor(Math.random() * listaNomes.length);
        let nomeSorteado = listaNomes[indice];
        let sorteado = document.getElementById('resultado');
        sorteado.innerHTML = "O amigo sorteado foi: " + nomeSorteado;
}
