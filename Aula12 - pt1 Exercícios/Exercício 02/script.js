function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (fano.value.lengh == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 9) {
            //criança
            img.setAttribute('src', 'Imagem/bebeh.jpg')
            } else if (idade < 21) {
            //adolescente
            img.setAttribute('src', 'Imagem/adolescenteh.jpg')
            } else if (idade < 50) {
            //homem
            img.setAttribute('src', 'Imagem/homem.jpg')
            } else {
            //idoso
            img.setAttribute('src', 'Imagem/idosom.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 9) {
            //criança
            img.setAttribute('src', 'Imagem/bebem.jpg')
            } else if (idade < 21) {
            //adolescente
            img.setAttribute('src', 'Imagem/adolescentem.jpg')
            } else if (idade < 50) {
            //mulher
            img.setAttribute('src', 'Imagem/mulher.jpg')
            } else {
            //idoso
            img.setAttribute('src', 'Imagem/idosof.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}