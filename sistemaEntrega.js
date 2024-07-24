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

const finalizarCompra = {
    mostrarTela: function() {
        console.log(chalk.bold.green("Procedimento de entrega iniciado."));
        espacamentoDuplo();
        
        let endereco = solicitarEndereco();
        espacamentoDuplo();
        
        console.log(chalk.bold.green(`O frete custará R$ 10,00.`));
        espacamentoDuplo();

        // Solicita confirmação do envio
        let confirmacao;
        do {
            confirmacao = Number(prompt("Deseja confirmar o envio? \n\n 1 -> Sim \n 2 -> Não \n\n"));
            espacamentoDuplo();

            if (confirmacao === 1) {
                console.log(`Seu pedido foi enviado para o seguinte endereço: ${endereco}`);
                espacamentoDuplo();
                console.log(chalk.bold.green("Agradecemos a sua compra e esperamos vê-lo novamente em breve."));
                espacamentoDuplo();
            } else if (confirmacao === 2) { //caso o usuario não queira pagar frete, exibe opção de retirar
                console.log("Produto ficará disponível para retirada em ponto de coleta.");
                espacamentoDuplo();
                console.log(chalk.bold.green("Agradecemos a sua compra e esperamos vê-lo novamente em breve."));
                espacamentoDuplo();
            } else {
                console.log(chalk.bold.red("Opção inválida. Tente novamente."));
                espacamentoDuplo();
            }
        } while (confirmacao !== 1 && confirmacao !== 2);
    }
};

module.exports = finalizarCompra;