var prompt = require('prompt-sync')();

function espacamentoDuplo() {
    console.log();
    console.log();
}

function solicitarEndereco() {
    let endereco = prompt("Insira o endereço de entrega: ");
    return endereco;
}

function finalizarCompra() {
    console.log("Procedimento de entrega iniciado.");
    espacamentoDuplo();
    
    let endereco = solicitarEndereco();
    espacamentoDuplo();
    
    console.log(`Obrigado pela compra!`);
    espacamentoDuplo();
    console.log(`Seu pedido foi enviado para o seguinte endereço: ${endereco}`);
    espacamentoDuplo();
    console.log(`Agradecemos a sua compra e esperamos vê-lo novamente em breve.`);
    espacamentoDuplo();
}

finalizarCompra();

module.exports = sistemaEntrega;