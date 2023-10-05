// 5! significa (5 fatorial) que é 5 x 4 x 3 x 2 x 1
function fatorial(numero) {
    let fat = 1
    for(let contador = numero; contador > 1; contador--) {
        fat * contador
    }
    return fat   
}

console.log(fatorial(5))
