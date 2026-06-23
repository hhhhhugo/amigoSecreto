let lista = document.getElementById('lista-amigos');
let amigo = document.getElementById('nome-amigo');
function adicionar (){
    if (lista.textContent == '' ){
    lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
    

}
function sortear (){

}
function reiniciar(){
    lista.textContent = '';
}