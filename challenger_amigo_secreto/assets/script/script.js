let amigos = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById('nome');
    const nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    amigos.push(nome);
    nomeInput.value = "";
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById('lista');
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo!");
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];
    document.getElementById('resultado').textContent = `O amigo secreto é: ${sorteado}`;
}