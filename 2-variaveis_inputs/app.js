const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Qual o seu nome? ', (input) => {
    console.log(`O seu nome é ${input}`)
})