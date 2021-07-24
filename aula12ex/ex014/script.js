function carregar() {
    var msgHora = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12){
        // BOM DIA
        msgHora.innerHTML = `Agora são: ${hora} horas, bom dia!`
        img.src='fotom.png'
        document.body.style.background = '#87CEEB'
    }else if(hora >=12 && hora < 18){
        // BOA TARDE
        msgHora.innerHTML = `Agora são: ${hora} horas, boa tarde!`
        img.src='fotot.png'
        document.body.style.background = '#836FFF'
    }else{
        // BOA NOITE
        msgHora.innerHTML = `Agora são: ${hora} horas, boa noite`
        img.src='foton.png'
        document.body.style.background = '#00008B'
    }
}



