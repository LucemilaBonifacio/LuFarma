const chalk = require("chalk");

// Importações
const prompt = require("prompt-sync")();


const divisoria = function() {
  console.log(chalk.red('\n==================================================================\n'));
}

function espacamentoDuplo() {
    console.log();
    console.log();
}

// Menu Principal
const menuInicial = {
  mostrarTela: function () {

      divisoria();
      console.log(chalk.yellow("  Menu Inicial  "));
      espacamentoDuplo();
      console.log(" O que você deseja? ");
      espacamentoDuplo();
      console.log(chalk.yellow("1 -> Produtos"));
      console.log(chalk.yellow("2 -> Serviços"));
      console.log(chalk.yellow("3 -> Sair"));
      

      divisoria(); // Exibe a divisória após cada interação
    }
  }


// Exportação
module.exports = menuInicial;
