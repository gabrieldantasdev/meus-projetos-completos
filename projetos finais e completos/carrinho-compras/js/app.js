let totalGeral = 0;
let nuneroInicial = document.getElementById('quantidade').value = 1;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 00,00';


function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

   
    
    let preco = valorUnitario * quantidade;
    
    
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${preco}</span>
  </section`
    
    let total = document.getElementById('valor-total')
    totalGeral = totalGeral + preco
    total.innerHTML = `<span class="texto-azul" id="valor-total">R$${totalGeral}</span>`;
    document.getElementById('quantidade').value = 1;





    
}









function limpar() {
    document.getElementById('lista-produtos').innerHTML= '';
    document.getElementById('valor-total').innerHTML= '';
    document.getElementById('valor-total').textContent = 'R$ 00,00';
    totalGeral = 0;
    
}

