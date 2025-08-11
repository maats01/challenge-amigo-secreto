let amigos = [];

function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];

        let novoElemento = document.createElement('li');
        novoElemento.textContent = amigo;
        
        lista.appendChild(novoElemento);   
    }
}

function adicionarAmigo() {
    let amigo = document.getElementById("amigo");

    if (amigos.length == 0) {
        document.getElementById("resultado").innerHTML = "";
    }

    if (!amigo.value) {
        return alert("Por favor, insira um nome válido.");
    }

    if (amigos.includes(amigo.value)) {
        return alert("Este nome já está na lista, adicione outro.");
    }

    console.log("input do usuário: " + amigo.value);
    amigos.push(amigo.value);
    atualizarListaAmigos();

    amigo.value = "";
}

function sortearAmigo() {
    if (amigos.length == 0) {
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * (amigos.length));
    let amigoSorteado = amigos[indiceSorteado];

    document.getElementById("resultado").innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
    document.getElementById("listaAmigos").innerHTML = "";
    amigos = [];
}