/* 5! significa (5 fatorial) que é 5 x 4 x 3 x 2 x 1
   5! = 5 x 4! o fatorial de um numero pode ser calculado baseado no fatorial de outro.
   n! = n x (n-1)! quando tenho variavel n  fatorial é sempre assim. a nao ser que n seja 1 que fatorial de 1 é 1.
   1! = 1
*/
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {    
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))