function cadastrarProduto(){
    const nome = document.getElementById("nomeProduto").value;
    const preco = document.getElementById("precoProduto").value;

    let caixa = document.createElement("div");
    caixa.id = "caixa"
    caixa.innerHTML = `<h3>${nome}  |  R$ ${preco}</h3>`
    caixa.innerHTML += `<button onclick="removerProduto(this)">Remover</button>`
    document.body.appendChild(caixa)
}

function removerProduto(botao){
    botao.parentElement.remove();
}
