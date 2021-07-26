const form = document.getElementById('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let produto = document.getElementById('produto').value;
    let valor = document.getElementById('valor').value;
    let desc = document.getElementById('desc').value;
    let data = {
        produto,
        valor,
        desc
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('produtos', convertData);

    let resposta = document.getElementById('resposta');

    let mensagem = "Cadastro efetuado com sucesso!";

setTimeout(() => {
    resposta.innerHTML = mensagem;
    listarProdutos();
}, 1000)
})

function listarProdutos(){
    const linha = document.getElementById('lista');
    const listaProdutos = JSON.parse(localStorage.getItem('produtos'));

    let  prod = `<div class="col"><div class="col_head"></div><div class="col_body"><p><b>Produto:</b> ${listaProdutos.produto}</p><p><b>Valor:</b> R$${listaProdutos.valor}</p><p><b>Descrição:</b> ${listaProdutos.desc}</p></div>`;
    
    linha.innerHTML = prod;

    localStorage.removeItem('produtos')
}