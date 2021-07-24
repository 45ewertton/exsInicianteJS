function gerar(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Preencha o campo')
    }else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let cont = 1;cont <= 10; cont++){
            let item = document.createElement('option')    
            item.text = `${n} x ${cont} = ${n*cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
        }
    }
}