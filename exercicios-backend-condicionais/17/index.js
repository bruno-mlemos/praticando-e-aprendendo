//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 5;

//valor pago
const valorPago = 30000;

let valorRestante = valorDoProduto - valorPago;
let parcelas = valorDoProduto / quantidadeDoParcelamento;
let quantidadeDeParcelasRestantes = quantidadeDoParcelamento - (valorPago / parcelas);



console.log(`Restam ${quantidadeDeParcelasRestantes} de R$ ${(parcelas / 100).toFixed(2)}`)