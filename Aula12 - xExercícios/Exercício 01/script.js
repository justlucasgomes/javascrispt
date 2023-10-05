function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementsByClassName('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'dia.jpg'
        document.body.style.background = '#edc27e'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'tarde.jpg'
    } else {
        //Boa noite!
        img.src = 'noite.jpg'
        document.body.style.background = '#4a6662'
    }
}