const prompt = require("prompt-sync")();
const boasvindas = require("./bemVindo");
const menuinicial = require("./menuInicial");
const menuservicos = require("./menuServicos");
const carrinho = require("./carrinho");
const login = require("./login");
const chalk = require("chalk");

console.clear();
boasvindas.mostrarTela();
login.mostrarTela();

function espacamentoDuplo() {
    console.log();
    console.log();
}

let continuar = true; // Flag para controlar o loop do menu

while (continuar) { // Loop para exibir o menu até que o usuário escolha sair
    menuinicial.mostrarTela();
    let opcaoMenu = Number(prompt("Escolha uma opção: ")); // Define opcaoMenu aqui
    espacamentoDuplo();

    switch (opcaoMenu) {
        case 1:
            let voltarAoMenuPrincipal = carrinho.mostrarTela(); // Chama a função mostrarTela do módulo carrinho
            if (voltarAoMenuPrincipal) continue; // Reinicia o loop do menu principal
            console.clear() // limpar a tela
            break;
        case 2:
            console.clear()
            menuservicos.mostrarTela(); // Chama a função mostrarTela do módulo menuServicos
            break;
        case 3:
        console.log(chalk.bold.green("Obrigado pela Preferencia! Volte Sempre! "));
        espacamentoDuplo();
        continuar = false; // Sai do loop
        break;
        default:
        console.log(chalk.bold.red("Opção inválida. Tente novamente."));
        espacamentoDuplo();
            console.log(chalk.bold.red("Opção inválida. Tente novamente."));
    }
}
