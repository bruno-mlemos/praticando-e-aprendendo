const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui 2.855.970

if (aposentada || portadoraDeDoenca) {
    console.log("ISENTA")
} else if (totalDeRendimentos < 2855970) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
} else {
    console.log("PEGA LEAO")
}