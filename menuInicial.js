// Importações
const prompt = require("prompt-sync")();


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

      divisoria();
      console.log("  Menu Inicial  ");
      espacamentoDuplo();
      console.log(" O que você deseja? ")
      espacamentoDuplo();
      console.log("1 -> Produtos");
      console.log("2 -> Serviços");
      console.log("3 -> Sair");
      

      divisoria(); // Exibe a divisória após cada interação
    }
  }


// Exportação
module.exports = menuInicial;
