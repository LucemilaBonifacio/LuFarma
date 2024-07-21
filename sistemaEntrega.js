var prompt = require('prompt-sync')();

function espacamentoDuplo() {
    console.log();
    console.log();
}

function solicitarEndereco() {
    let endereco = prompt("Insira o endereço de entrega: "); // Solicita o endereço ao usuário
    return endereco;
}

function finalizarCompra() {
    console.log("Procedimento de entrega iniciado.");
    espacamentoDuplo();
    
    let endereco = solicitarEndereco();
    espacamentoDuplo();
    
    console.log(`O frete custará R$ 10,00.`);
    espacamentoDuplo();

    // Solicita confirmação do envio
    let confirmacao = Number(prompt("Deseja confirmar o envio? \n\n 1 -> Sim \n 2 -> Não \n\n"));

    if (confirmacao === 1) {
        console.log(`Seu pedido foi enviado para o seguinte endereço: ${endereco}`);
        espacamentoDuplo();
        console.log("Agradecemos a sua compra e esperamos vê-lo novamente em breve.");
        espacamentoDuplo();
    } else if (confirmacao === 2) {
        console.log("Produto ficará disponível para retirada em ponto de coleta.");
        espacamentoDuplo();
        console.log("Agradecemos a sua compra e esperamos vê-lo novamente em breve.");
        espacamentoDuplo();
    } else {
        console.log("Opção inválida. Tente novamente.");
        espacamentoDuplo();
        finalizarCompra(); // Chama a função novamente se a opção for inválida
    }
}

finalizarCompra();

module.exports = finalizarCompra;
