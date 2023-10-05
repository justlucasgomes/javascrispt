function tabuada() {

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) //Para número digitado
        let c = 1

        tab.innerHTML = '' //Para limpar o select antes de iniciar a tabuada

        while (c <= 10) {
            let item = document.createElement('option') //To criando um elemento option para ter opções dentro do select.
            item.text = `${n} x ${c} = ${n*c}` //Pra outras linguagens saber o item que foi selecionado.
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}