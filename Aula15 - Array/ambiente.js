let num = [5, 8, 2, 9, 3]

let pos = num.indexOf(8)
    
    if (pos == -1) {
        console.log('O valor não foi encontrado!')
    } else {
        console.log(`O valor 8 esta na posição ${pos}`)
    }

console.log(`Nosso vetor é ${num}`)
// num[5] = 6 (se eu adicionar o valor 6 no elemento que esta vazio 5, o javascript percebe isso e cria pra você. Para saber o valor de um vetor específico posso fazere como abaixo.
console.log(`O valor do  primeiro vetor é ${num[0]}`)
// num.push(1) (Se eu quiser colocar na ultima posição sem saber qual elemento, nesse caso 7 vai para ultima posição disponivel no array.)
num.push(1)
// num.length (não vai parenteses, por ser atributo, ele serve para calcular a quantidade de elementos nesse caso 5.)
console.log(`O vetor tem ${num.length} posições`)
// num.sort() (ele vai pegar todos os valores do elemento e deixar em forma crescente, nesse caso: 2, 3, 5, 8 e 9)
num.sort()


for(let c=0;c<num.length;c++) {// Ou seja Para Variável c(contador) recebe 0 repita c até o número máximo de elementos dentro da variavel num, atraves do c++ para ele ir adicionando 1 até terminar o loop.
    console.log(num[c]) //para escrever na tela a solução eu coloco num indice c na chave c.
}
