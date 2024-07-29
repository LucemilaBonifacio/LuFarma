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
            //espacamentoDuplo();
            console.log(chalk.yellow("Menu Serviços:"));
            espacamentoDuplo();
            console.log(chalk.yellow("1 -> Serviços da farmácia"));
            console.log(chalk.yellow("2 -> Lista de parceiros"));
            console.log(chalk.yellow("3 -> Voltar ao Menu Inicial"));
            espacamentoDuplo();
            opcao = Number(prompt("Escolha uma opção: "));
            espacamentoDuplo();

            switch (opcao) {
                case 1:
                    this.mostrarServicosFarmacia(); // Correção para chamar a função correta
                    break;
                case 2:
                    this.mostrarListaParceiros(); // Correção para chamar a função correta
                    break;
                case 3:
                    console.clear();
                    // console.log(chalk.bold.green("Volte logo!"));
                    // espacamentoDuplo();
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
        console.log(chalk.yellow("3 -> Voltar ao Menu Serviços"));
        espacamentoDuplo();
        let servicoOpcao = Number(prompt("Escolha uma opção: "));
        espacamentoDuplo();

        if (servicoOpcao == 1 || servicoOpcao == 2) {
            let nomeServico;
            console.clear();
            espacamentoDuplo();
            console.log(chalk.bold.green("Encaminhando usuário ao farmacêutico de plantão."));
            espacamentoDuplo();
            if (servicoOpcao == 1){ 
                nomeServico = "Testagem";
            }else {
                nomeServico = "Aferição de Pressão";
            }
            console.log(chalk.green(`Serviço escolhido: ${nomeServico}`))
            espacamentoDuplo();
        } else {
            //console.log(chalk.bold.green("Volte logo!"));
            console.clear();
        }
        espacamentoDuplo();
    },

    mostrarListaParceiros: function() {
        divisoria();
        console.log(chalk.yellow("Lista de parceiros:"));
        espacamentoDuplo();
        console.log(chalk.yellow("1 -> MedPrev"));
        console.log(chalk.yellow("2 -> Vaccine"));
        console.log(chalk.yellow("3 -> Cerpe"));
        console.log(chalk.yellow("4 -> Voltar ao Menu Serviços"));
        espacamentoDuplo();
        let parceiroOpcao = Number(prompt("Escolha uma opção: "));
        espacamentoDuplo();
        if (parceiroOpcao >= 1 && parceiroOpcao <= 3) {
            console.clear();
            espacamentoDuplo();
            console.log(chalk.bold.green("Encaminhando usuário ao Serviço escolhido."));
        } else {
            //console.log(chalk.bold.green("Volte logo!"));
            console.clear();
        }
        espacamentoDuplo();
    }
};

module.exports = menuServicos;
