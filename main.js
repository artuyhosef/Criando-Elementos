'use strict'

 const botaoCadastrar = document.getElementById('cadastrar')
 let contadorCodigo = 1

function cadastrarProduto (){
    const tabela = document.getElementById('tabela')
    const caixaProduto = document.getElementById('produto')
    const caixaQntd = document.getElementById('qntd-produto')
    const caixaPreco = document.getElementById('preco-produto')

    const novaLinha = document.createElement('tr')

    const tdCodigo = document.createElement('td')
    tdCodigo.textContent = contadorCodigo++

    const tdNome = document.createElement('td')
    tdNome.textContent = caixaProduto.value

    const tdQntd = document.createElement('td')
    tdQntd.textContent = caixaQntd.value

    const tdPreco = document.createElement('td')
    tdPreco.textContent = caixaPreco.value

    novaLinha.append(tdCodigo)
    novaLinha.append(tdNome)
    novaLinha.append(tdQntd)
    novaLinha.append(tdPreco)
    

    tabela.append(novaLinha)
}



botaoCadastrar.addEventListener('click', cadastrarProduto)

