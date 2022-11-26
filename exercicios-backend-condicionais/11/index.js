//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

if (totalJaPagoPeloAluno >= 18000 * 100 || mesesDecorridos > 60) {

    console.log("O aluno não deve mais nada")

} else if (mesesDecorridos <= 60 && rendaMensalEmCentavos > (2000 * 100)) {

    let parcelas = rendaMensalEmCentavos * 0.18 / 100;

    console.log(`Tendo em vista que a renda mensal do aluno é de ${rendaMensalEmCentavos / 100} reais\n
    O valor da parcela será de: R$ ${parcelas.toFixed(2)}`);

} else if (rendaMensalEmCentavos < 2000 * 100) {
    console.log("A renda é menor que o salário mínino exigido, esse mês não será necessário pagar");
}