const prompt = require("prompt-sync")();

const divisoria = function() {
  console.log("\n==================================================================\n");
}

  const bemVindo = {
    mostrarTela: function () {
      divisoria();
      console.log ("Seja bem vindo à LuFarma");
                                                                        
      divisoria();
    },
  };
  
bemVindo.mostrarTela();

 module.exports = bemVindo;