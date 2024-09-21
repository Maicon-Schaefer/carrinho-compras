let totalGeral = 0;
let carrinhoDeCompras = [];
limpar();
 
//Recuperar valores do nome do produto, quantidade e valor.
function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);

    if (!produto || produto.trim() === "") { //'!' verifica se a variável 'produto' está sem valor ou indefinida. O método trim() remove os espaços em branco no início e no final da string
        alert("Selecione um produto válido.");
        return;
    }

    if (isNaN(quantidade) || quantidade <= 0) { // isNan' verifica se o valor da variável quantidade não é um número (NaN). || serve somente para separar.
        alert("Insira uma quantidade válida.");
         return;
    }

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);

    //Calcular o preço (subtotal)
    let preco = parseFloat(quantidade * valorUnitario);

    //Para juntar os produtos adicionados
    let produtoJaAdicionado = carrinhoDeCompras.find(p => p.nome == nomeProduto)

    if (produtoJaAdicionado) {
        produtoJaAdicionado.quantidade += quantidade;
        produtoJaAdicionado.valor = produtoJaAdicionado.valor + preco;
    } else {
        let produto = {
            nome: nomeProduto,
            quantidade: quantidade,
            valor: preco
        };

        carrinhoDeCompras.push(produto);
    }

    //Adicionar no carrinho
    let lista = document.getElementById('lista-produtos');
    lista.innerHTML = '';

    carrinhoDeCompras.forEach(p => {
        lista.innerHTML = lista.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${p.quantidade}x</span> ${p.nome} <span class="texto-azul">R$${p.valor.toFixed(2)}</span>
        </section>`;
    });


    //Atualizar o valor total
    totalGeral = parseFloat(totalGeral + preco);
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;
    document.getElementById('quantidade').value = 0;
}

 //Limpar
 function limpar() {
    totalGeral = 0;
    carrinhoDeCompras = [];
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0,00'
}
 