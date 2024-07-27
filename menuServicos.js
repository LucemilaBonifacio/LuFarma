const prompt = require("prompt-sync")();
const chalk = require("chalk");

const divisoria = function() {
    console.log(chalk.red('\n==================================================================\n'));
}

function espacamentoDuplo() {
    console.log();
    console.log();
}

const menuServicos = {
    mostrarTela: function() {
        let opcao;
        
        do {
            console.log(chalk.yellow("Menu de serviços"));
            divisoria();
            espacamentoDuplo();
            console.log(chalk.yellow("Menu:"));
            espacamentoDuplo();
            console.log(chalk.yellow("1 -> Lista de Serviços da farmácia"));
            console.log(chalk.yellow("2 -> Lista de empresas parceiras"));
            console.log(chalk.yellow("3 -> Sair"));
            espacamentoDuplo();
            opcao = Number(prompt("Escolha uma opção: "));

            switch (opcao) {
                case 1:
                    this.mostrarServicosFarmacia(); // Correção para chamar a função correta
                    break;
                case 2:
                    this.mostrarListaParceiros(); // Correção para chamar a função correta
                    break;
                case 3:
                    console.log(chalk.bold.green("Volte logo!"));
                    espacamentoDuplo();
                    break;
                default:
                    console.log(chalk.bold.red("Opção inválida. Tente novamente."));
                    espacamentoDuplo();
            }
        } while (opcao !== 3); // Reexibe o menu até que a opção 3 seja escolhida
    },

    mostrarServicosFarmacia: function() {
        divisoria();
        console.log(chalk.yellow("Serviços da farmácia"));
        espacamentoDuplo();
        console.log(chalk.yellow("1 -> Testagem para COVID"));
        console.log(chalk.yellow("2 -> Aferição de pressão"));
        console.log(chalk.yellow("3 -> Sair"));
        espacamentoDuplo();
        let servicoOpcao = Number(prompt("Escolha uma opção: "));
        espacamentoDuplo();

        if (servicoOpcao == 1 || servicoOpcao == 2) {
            console.log(chalk.bold.green("Encaminhando usuário ao farmacêutico de plantão."));
        } else {
            console.log(chalk.bold.green("Volte logo!"));
        }
        espacamentoDuplo();
    },

    mostrarListaParceiros: function() {
        divisoria();
        console.log(chalk.yellow("Lista de parceiros:"));
        espacamentoDuplo();
        console.log(chalk.yellow("1 -> MedPrev - Medicina Online"));
        console.log(chalk.yellow("2 -> Vaccine - Clínica de vacinas"));
        console.log(chalk.yellow("3 -> Cerpe - Laboratório"));
        console.log(chalk.yellow("4 -> Sair"));
        espacamentoDuplo();
        let parceiroOpcao = Number(prompt("Escolha uma opção: "));
        espacamentoDuplo();
        if (parceiroOpcao >= 1 && parceiroOpcao <= 3) {
            console.log(chalk.bold.green("Encaminhando usuário ao Serviço escolhido."));
        } else {
            console.log(chalk.bold.green("Volte logo!"));
        }
        espacamentoDuplo();
    }
};

module.exports = menuServicos;
