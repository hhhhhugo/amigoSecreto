let amigos = [];
let amigo = document.getElementById('nome-amigo');
let lista = document.getElementById('lista-amigos');
 let sorteio = document.getElementById('lista-sorteio');
function adicionar() {
    if (amigo.value == ''){
        alert ('informe o nome do amigo!')
        return;
    }
    if (amigos.includes(amigo.value)){
        alert('Nome já adicionado"')
        return;
    }
amigos.push(amigo.value);
if (lista.textContent == '') {
    lista.textContent = amigo.value;
} else {
    lista.textContent = lista.textContent + ', ' + amigo.value;
}
amigo.value = '';
}
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function sortear() {
    if (amigos.length % 2 === 0 + 1){
        alert('o numeros de amigos é impar, adicione mais um amigo!');
        return;
    }
    embaralhar(amigos);
for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
    }
}
}
function reiniciar (){
    lista.textContent = ' ';
    sorteio.textContent = ' ';
    amigos = [];
}