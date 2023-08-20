
const lista_argumentos = process.argv.slice(2);

// console.log('-----------FOR------------');

// for (let index= 0; index < lista_argumentos.length; index++) {
//     const element = lista_argumentos[index];
//     console.log(`O número ${index + 1} é o(a) ${lista_argumentos[index]}`);   
// }




// console.log('-----------WHILE------------');
// let counter = 0;

// while(counter < 3) {
//     console.log(`O número ${counter + 1} é o(a) ${lista_argumentos[counter]}`);   
//     counter++;
// }




// console.log('-----------DO WHILE------------');
// let counter = 0;

// do {
//     console.log(`Posiçao: ${counter}, valor lido: ${lista_argumentos[counter]}`);
//     counter++;
// } while (counter < lista_argumentos.length);




// console.log('-----------FOR OF------------');
let counter = 0;
for (let item of lista_argumentos) {
    console.log(`${lista_argumentos[counter]}`)
    counter++;
}







