let listaDeAmigosArray = []; 

function adicionar() {
let nomeDigitado = document.getElementById('nome-amigo');
if(nomeDigitado.value == '') {
    alert('Informe o nome do amigo!');
    return; 
}



if(listaDeAmigosArray.includes(nomeDigitado.value)) {
    alert('Nome já digitado!');
    return;
} 



    let listaDeAmigos = document.getElementById('lista-amigos');

    
    if (listaDeAmigos.textContent == '') {
        listaDeAmigos.textContent = nomeDigitado.value;
    } else {
        listaDeAmigos.textContent = listaDeAmigos.textContent + ', ' + nomeDigitado.value;
    }

    listaDeAmigosArray.push(nomeDigitado.value); 
    nomeDigitado.value = '';
}

function sortear() {
    if (listaDeAmigosArray.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralhar(listaDeAmigosArray);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < listaDeAmigosArray.length; i++) {
        if (i == listaDeAmigosArray.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaDeAmigosArray[i] +' --> ' +listaDeAmigosArray[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaDeAmigosArray[i] +' --> ' +listaDeAmigosArray[i + 1] + '<br/>';
        }
    }
}


//função para apagar os campos
function reiniciar() {
    let listaDeAmigos = document.getElementById('lista-amigos');
    let sorteio = document.getElementById ('lista-sorteio');

    sorteio.textContent = '';
    listaDeAmigos.textContent = '';
    listaDeAmigosArray = []; 
}

//função para embaralhar os nomes digitados e colocados na lista
function embaralhar(listaDeAmigos) {
    
    for (let indice = listaDeAmigos.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [listaDeAmigos[indice - 1], listaDeAmigos[indiceAleatorio]] = [listaDeAmigos[indiceAleatorio], listaDeAmigos[indice - 1]];
    }
}
