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
