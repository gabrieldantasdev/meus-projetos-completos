let nuneroInicial = document.getElementById('qtd').value = 1;
function comprar() {
    let selectIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = document.getElementById('qtd').value; 

    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }
    
    if(selectIngresso == 'pista') {
        comprarPista(qtd);
    }
    if(selectIngresso == 'superior') { 
        comprarSuperior(qtd);
    }
    if(selectIngresso == 'inferior') {
        comprarInferior(qtd);
    }
}
function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert ('Quantidade indísponivel para o tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert ('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert ('Quantidade indísponivel para o tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert ('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert ('Quantidade indísponivel para o tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert ('Compra realizada com sucesso!');
    }
}
