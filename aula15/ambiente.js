let num = [3, 4, 5, 7, 8]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} espaços.`)
let pos = num.indexOf(1)
if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor está na posição ${pos}.`)
}
