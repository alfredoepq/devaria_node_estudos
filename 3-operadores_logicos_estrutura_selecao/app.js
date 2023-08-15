const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
console.log('Esse programa vai checar se você tem mais de dezoito anos e se pode participar de uma corrida de kart');
console.log('Também saber se o seu nome está na lista de convidados');

readline.question('Em que ano você nasceu? ', idade => {
  if (idade >= 2004) {
    console.log('Você é menor de idade, não pode participar');
    console.log('FINISH');
  } else {
    readline.question('Você tem habilitação? (Sim/Não)', temHabilitacao => {
      if (!(temHabilitacao.toUpperCase() === 'SIM')) {
        console.log('Você não tem habilitação')
      } else {
        readline.question('Qual o seu nome? ', nome => {
          switch (nome) {
            case 'Douglas' :
              console.log('Seja bem vindo');
              console.log('FINISH');
              break;
            case 'Gilberto':
              break;
            default:
              console.log('Desculpa mas não encontramos seu nome na lista')
              console.log('FINISH');
              break;
          }
        })
      }
    } )
  }
})