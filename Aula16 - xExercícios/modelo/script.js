// Variáveis globais
const inputNumero = document.querySelector('#numero');
const btnEnviar = document.querySelector('#enviar');
const divResultados = document.querySelector('#resultados');
const btnFinalizar = document.querySelector('#finalizar');
const numerosCadastrados = [];
let totalDeNumerosCadastrados = 0;
let maiorNumeroInformado;
let menorNumeroInformado;
let somaValores = 0;

// Função para verificar se um número é válido
function numeroValido(numero) {
  return numero >= 1 && numero <= 100;
}

// Função para atualizar a lista de números
function atualizarLista(numero) {
  numerosCadastrados.push(numero);
  const li = document.createElement('li');
  li.textContent = numero;
  divResultados.appendChild(li);
}

// Evento de clique no botão "Enviar"
btnEnviar.addEventListener('click', function () {
  const numeroDigitado = parseInt(inputNumero.value);

  // Verifica se o número é válido
  if (!numeroValido(numeroDigitado)) {
    window.alert('Valor inválido ou já encontrado na lista.');
    return;
  }

  // Verifica se o número já foi cadastrado
  if (numerosCadastrados.includes(numeroDigitado)) {
    window.alert('Este número já foi cadastrado na lista.');
    return;
  }

  // Atualiza a lista e os cálculos
  atualizarLista(numeroDigitado);
  totalDeNumerosCadastrados++;
  somaValores += numeroDigitado;

  // Atualiza o maior e o menor número informado
  if (totalDeNumerosCadastrados === 1) {
    maiorNumeroInformado = numeroDigitado;
    menorNumeroInformado = numeroDigitado;
  } else {
    if (numeroDigitado > maiorNumeroInformado) {
      maiorNumeroInformado = numeroDigitado;
    }
    if (numeroDigitado < menorNumeroInformado) {
      menorNumeroInformado = numeroDigitado;
    }
  }

  // Limpa o campo de entrada
  inputNumero.value = '';
});

// Evento de clique no botão "Finalizar"
btnFinalizar.addEventListener('click', function () {
    if (totalDeNumerosCadastrados === 0) {
      window.alert('Nenhum número foi cadastrado.');
      return;
    }
  
    const mediaValores = somaValores / totalDeNumerosCadastrados;
  
    // Atualize os elementos com as informações
    document.getElementById('info1').textContent = `Ao todo temos ${totalDeNumerosCadastrados} números cadastrados.`;
    document.getElementById('info2').textContent = `O maior número informado foi ${maiorNumeroInformado}.`;
    document.getElementById('info3').textContent = `O menor número informado foi ${menorNumeroInformado}.`;
    document.getElementById('info4').textContent = `Somando todos os valores temos ${somaValores}.`;
    document.getElementById('info5').textContent = `A média dos valores digitados é ${mediaValores}.`;
  
    // Também pode limpar a lista de resultados se desejar
    divResultados.innerHTML = '';
});
  
