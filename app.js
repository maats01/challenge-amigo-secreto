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

    if (!amigo.value) {
        return alert("Por favor, insira um nome.")
    }

    console.log("input do usuário: " + amigo.value);
    amigos.push(amigo.value);
    atualizarListaAmigos();

    amigo.value = "";
}