const prompt = require("prompt-sync")();
const boasvindas = require("./bemVindo");
const menuinicial = require("./menuInicial");
const menuservicos = require("./menuServicos");
const carrinho = require("./carrinho");
const login = require("./login");
const sistemacompras = require("./sistemaCompras");
const sistemaentrega = require("./sistemaEntrega");
const chalk = require("chalk");

boasvindas.mostrarTela();

login.mostrarTela(); 


let continuar = true; // Flag para controlar o loop do menu

while (continuar) { // Loop para exibir o menu até que o usuário escolha sair
  
    menuinicial.mostrarTela();
    let opcaoMenu = Number(prompt("Escolha uma opção: ")); // Define opcaoMenu aqui

    switch (opcaoMenu) {
        case 1:
        carrinho.mostrarTela(); // Chama a função mostrarTela do módulo carrinho
        sistemacompras.mostrarTela();
        sistemaentrega.mostrarTela();
        break;
        case 2:
        menuservicos.mostrarTela(); // Chama a função mostrarTela do módulo menuServicos
        break;
        case 3:
        console.log(chalk.bold.green("Obrigado pela Preferencia! Volte Sempre! "));
        continuar = false; // Sai do loop
        break;
        default:
        console.log(chalk.bold.red("Opção inválida. Tente novamente."));
    }
}

