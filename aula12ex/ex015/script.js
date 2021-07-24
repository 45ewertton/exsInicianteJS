function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(formAno.value.length == 0 || Number(formAno.value) > ano){
        window.alert('Verifique os dados!')
    }else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(formSex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10 ){
                // criança
                img.setAttribute('src', 'bbH.png')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src', 'jovemH.png')
            }else if(idade < 50){
                // adulto
                img.setAttribute('src', 'adultoH.png')
            }else{
                // idoso
                img.setAttribute('src', 'idosoH.png')
            }
        }else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10 ){
                // criança
                img.setAttribute('src', 'bbM.png')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src', 'jovemM.png')
            }else if(idade < 50){
                // adulto
                img.setAttribute('src', 'adultoM.png')
            }else{
                // idoso
                img.setAttribute('src', 'idosoM.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} ano(s). `
        res.appendChild(img)
    }

}