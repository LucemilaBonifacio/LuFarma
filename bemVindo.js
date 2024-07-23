const prompt = require("prompt-sync")();
const chalk = require("chalk");

function divisoria() {
  console.log("\n==================================================================\n");
}

  const bemVindo = {
    mostrarTela: function () {
      divisoria();
      const msg = chalk.bold.green("Seja bem vindo à LuFarma")
      console.log (msg);
      divisoria();
    },
  };
  
 module.exports = bemVindo;