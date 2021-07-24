let num = document.getElementById('txtnum')
let lista = document.getElementById('selanalisador')
let result = document.getElementById('resultado')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
       return true 
    }else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
        result.innerHTML = ''
    }else{
        window.alert(`Valor inválido ou já encontrado na lista \u{1F605}`)
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert(`Lista vazia, adicione valores antes de finalizar. \u{1F605}`)
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){

            soma += valores[pos]

            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot

        result.inLista = ''
        result.innerHTML += `<p>Ao todo temos <strong>${tot}</strong> valores cadastrados</p>`
        result.innerHTML += `<p>O maior valor é <strong>${maior}</strong></p>`
        result.innerHTML += `<p>O menor valor é <strong>${menor}</strong></p>`
        result.innerHTML += `<p>A soma do valores adicionados é: <strong>${soma}</strong> </p>`
        result.innerHTML += `<p>A média dos valores adicionados é: <strong>${media}</strong> </p>`
        result.innerHTML += `<p><strong>---------------------------------------------------</strong></P>`
    }
}