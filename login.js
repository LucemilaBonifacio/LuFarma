const prompt = require("prompt-sync")();
//Fazer a requisição da lista de usuarios
const listaUsuarios = require("./listaUsuarios");


 function divisoria() {
  console.log("\n==================================================================\n");
};

const login = {
  loginOk: false,
  contaLogada: null,

  mostrarTela: function() {
    while (this.loginOk == false) {
      const loginInput = prompt(`Login: `);
      const senhaInput = prompt(`Senha: `);
      divisoria();
    

      for (let usuario of listaUsuarios) {
        if (usuario.login.toLowerCase() == loginInput.toLowerCase() && usuario.senha == senhaInput) {
          this.contaLogada = usuario;
          this.loginOk = true;

          console.log(`Bem vindo, ${this.contaLogada.login}!`);
          divisoria();
          break;
        }
      }

      if (this.loginOk == false) {
        console.log("Login ou senha incorretos. Tente novamente.");
        divisoria();
      }
    }
  },
};
login.mostrarTela();
// Exportação
module.exports = login;