const tabela = document.querySelector(".tabela-js");
axios.get("https://xd.gabrielnecoo3.repl.co/funcionarios").then(function(resposta){
    getData(resposta.data)
})
.catch(function (error) {
    // manipula erros da requisição
    console.error(error)})

function getData(dados){
    dados.map((item)=>{ 
        tabela.innerHTML += `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.nome}</td>
            <td>${item.cargo}</td>
            <td>${item.salario}</td>
            <td>
                <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
                <button class="btn btn-primary"><i class="bi bi-pen"></i></button>
            </td>
        </tr>`
    })
    
}