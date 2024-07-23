// Importações
const prompt = require("prompt-sync")();
const carrinho = require('./carrinho');
const menuServicos = require('./menuServicos');


const divisoria = function() {
  console.log('\n==================================================================\n');
}

function espacamentoDuplo() {
    console.log();
    console.log();
}

// Menu Principal
const menuInicial = {
  mostrarTela: function () {
    let continuar = true; // Flag para controlar o loop do menu

    while (continuar) { // Loop para exibir o menu até que o usuário escolha sair
      console.log("  Menu Inicial  ");
      espacamentoDuplo();
      console.log(" O que você deseja? ")
      espacamentoDuplo();
      console.log("1 -> Produtos");
      console.log("2 -> Serviços");
      console.log("3 -> Sair");
      
      let opcaoMenu = Number(prompt("Escolha uma opção: ")); // Define opcaoMenu aqui

      switch (opcaoMenu) {
        case 1:
          carrinho.mostrarTela(); // Chama a função mostrarTela do módulo carrinho
          break;
        case 2:
          menuServicos.mostrarTela(); // Chama a função mostrarTela do módulo menuServicos
          break;
        case 3:
          console.log("Volte logo!");
          continuar = false; // Sai do loop
          break;
        default:
          console.log("Opção inválida. Tente novamente.");
      }
      divisoria(); // Exibe a divisória após cada interação
    }
  },
};

menuInicial.mostrarTela(); // Chama a função mostrarTela para iniciar o menu

// Exportação
module.exports = menuInicial;
