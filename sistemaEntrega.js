const prompt = require('prompt-sync')();
const chalk = require('chalk');

function espacamentoDuplo() {
    console.log();
    console.log();
}

function solicitarEndereco() {
    let endereco = prompt("Insira o endereço de entrega: "); // Solicita o endereço ao usuário
    return endereco;
}
function divisoria(){ 
    console.log(chalk.red("\n==================================================================\n"));
}

const finalizarCompra = {
    mostrarTela: function() {
        console.log(chalk.bold.green("Procedimento de entrega iniciado."));
        espacamentoDuplo();
        
        do {
            console.log(chalk.bold.yellow("1 -> Deseja retirar em algum ponto de coleta?"));
            console.log(chalk.bold.yellow("2 -> Deseja enviar para entrega?"));
            espacamentoDuplo();
            confirmacao = Number(prompt("Escolha uma opção:"));
            espacamentoDuplo();

            if (confirmacao === 1) {1
                console.log("Onde deseja retirar?");
                console.log("1 -> Recife antigo ");
                console.log("2 -> Boa viagem");
                console.log("3 -> Várzea");
                console.log("4 -> Madalena");
                espacamentoDuplo();
                let opcaoRetirada = Number(prompt(" "));
                if(opcaoRetirada == 1 || opcaoRetirada == 2 || opcaoRetirada == 3 || opcaoRetirada == 4){
                espacamentoDuplo();
                console.log(chalk.bold.green("Produto ficará disponível no ponto de coleta selecionado."))
                espacamentoDuplo();
                console.log(chalk.bold.green("Agradecemos a sua compra e esperamos vê-lo novamente em breve."));
                espacamentoDuplo();
                divisoria();}else{};
                break; // Encerra o loop após exibir a mensagem de retirada
            } else if (confirmacao === 2) {
                let endereco = solicitarEndereco();
                espacamentoDuplo();
                console.log(chalk.bold.green(`O frete custará R$ 10,00.`));
                espacamentoDuplo();
                console.log(`Seu pedido foi enviado para o seguinte endereço: ${endereco}`);
                espacamentoDuplo();
                console.log(chalk.bold.green("Agradecemos a sua compra e esperamos vê-lo novamente em breve."));
                espacamentoDuplo();
                divisoria();
                break; // Encerra o loop após exibir a mensagem de envio
            } else {
                console.log(chalk.bold.red("Opção inválida. Tente novamente."));
                espacamentoDuplo();
                divisoria();
            }
        } while (true); 
    }
};

module.exports = finalizarCompra; 
