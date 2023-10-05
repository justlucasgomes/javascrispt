function contar() {
    let ini = document.getElementById('start')
    let fim = document.getElementById('end')
    let passo = document.getElementById('step')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')

    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0) {
            window.alert('Passo invalido')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c}👉`
            }
        } else {
            //contagem regressiva
            for (let c = i; c>= f; c -= p) {
                res.innerHTML += `${c}👉`
            }           
        }
        res.innerHTML += `📍`
    }
        
}