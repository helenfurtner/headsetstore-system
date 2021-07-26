const form = document.getElementById('formulario');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let end = document.getElementById('end').value;
    let data = {
        nome,
        email,
        telefone,
        end
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('clientes', convertData);

    let resposta = document.getElementById('resposta');

    let mensagem = "Cadastro efetuado com sucesso!";

setTimeout(() => {
    resposta.innerHTML = mensagem;
    listarClientes();
}, 1000)
})

function listarClientes(){
    const linha = document.getElementById('lista');
    const listaClientes = JSON.parse(localStorage.getItem('clientes'));

    let  cli = `<div class="col"><div class="col_head_cliente"></div><div class="col_body"><p><b>Nome:</b> ${listaClientes.nome}</p><p><b>E-mail:</b> ${listaClientes.email}</p><p><b>Telefone:</b> ${listaClientes.telefone}</p><p><b>Endereço:</b> ${listaClientes.end}</p></div></div>`;
    
    linha.innerHTML = cli;

    localStorage.removeItem('clientes')
}