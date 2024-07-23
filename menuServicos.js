const prompt = require("prompt-sync")();

const divisoria = function() {
    console.log('\n==================================================================\n');
}

function espacamentoDuplo() {
    console.log();
    console.log();
}

const menuServicos = {
    mostrarTela: function() {
        let opcao;
        
        do {
            console.log("Menu de serviços");
            divisoria();
            espacamentoDuplo();
            console.log("Menu:");
            espacamentoDuplo();
            console.log("1 -> Serviços da farmácia");
            console.log("2 -> Lista de parceiros");
            console.log("3 -> Sair");
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
                    console.log("Volte logo!");
                    espacamentoDuplo();
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
                    espacamentoDuplo();
            }
        } while (opcao !== 3); // Reexibe o menu até que a opção 3 seja escolhida
    },

    mostrarServicosFarmacia: function() {
        divisoria();
        console.log("Serviços da farmácia");
        espacamentoDuplo();
        console.log("1 -> Testagem");
        console.log("2 -> Aferição de pressão");
        console.log("3 -> Sair");
        espacamentoDuplo();
        let servicoOpcao = Number(prompt("Escolha uma opção: "));
        espacamentoDuplo();

        if (servicoOpcao == 1 || servicoOpcao == 2) {
            console.log("Encaminhando usuário ao farmacêutico de plantão.");
        } else {
            console.log("Volte logo!");
        }
        espacamentoDuplo();
    },

    mostrarListaParceiros: function() {
        divisoria();
        console.log("Lista de parceiros:");
        espacamentoDuplo();
        console.log("1 -> MedPrev");
        console.log("2 -> Vaccine");
        console.log("3 -> Cerpe");
        console.log("4 -> Sair");
        espacamentoDuplo();
        let parceiroOpcao = Number(prompt("Escolha uma opção: "));
        espacamentoDuplo();
        if (parceiroOpcao >= 1 && parceiroOpcao <= 3) {
            console.log("Encaminhando usuário ao Serviço escolhido.");
        } else {
            console.log("Volte logo!");
        }
        espacamentoDuplo();
    }
};

module.exports = menuServicos;
