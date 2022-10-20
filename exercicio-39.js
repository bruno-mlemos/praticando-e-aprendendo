const disjuntores = [true, true, true, false, false, true, false, false];
let indice = 0;


for (let disjuntor of disjuntores) {
    if (disjuntor) {
        console.log(indice)
    }
    indice++;
}
