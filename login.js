const prompt = require("prompt-sync")();
const chalk = require("chalk");
//Fazer a requisição da lista de usuarios

const listaUsuarios = require("./listaUsuarios");


 function divisoria() {
  console.log(chalk.bold.red("\n==================================================================\n"));
};

const login = {
  loginOk: false,
  contaLogada: null,

  mostrarTela: function() {
    console.log(chalk.bold.yellow("Efetue seu login"));
    while (this.loginOk == false) {
      const loginInput = prompt(`Login: `);
      const senhaInput = prompt(`Senha: `);
      divisoria();
    

      for (let usuario of listaUsuarios) {
        if (usuario.login.toLowerCase() == loginInput.toLowerCase() && usuario.senha == senhaInput) {
          this.contaLogada = usuario;
          this.loginOk = true;
 
          console.log(chalk.bold.green("Login realizado com sucesso"));
          divisoria();
          break;
        }
      }

      if (this.loginOk == false) {
        console.log(chalk.bold.red("Login ou senha incorretos. Tente novamente."));
        divisoria();
      }
    }
  },
};

// Exportação
module.exports = login;