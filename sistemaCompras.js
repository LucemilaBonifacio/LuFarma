var prompt = require('prompt-sync')();
var QRCode = require('qrcode-terminal');

const sistemaCompras = {
    mostrarTela: function() {
        let pix;
        let debito;
        let credito;
        let pagarNaEntrega;
        let dadosCartao;
        let codCartao;

        function espacamentoDuplo() {
            console.log();
            console.log();
        }

        function solicitarDadosCartao() {
            dadosCartao = prompt("Insira dados do cartão: ");
            codCartao = prompt("Insira código de segurança: ");
            espacamentoDuplo();
            if (dadosCartao.length === 16) {
                console.log("Pagamento aprovado \nProsseguindo para entrega.");
            } else {
                console.log("Dados inválidos, tente novamente.");
            }
        }

        console.log("Como deseja pagar?");
        espacamentoDuplo();
        console.log(" 1 -> Débito \n 2 -> Crédito \n 3 -> Pix \n 4 -> Pagar na entrega \n");
        espacamentoDuplo();

        let opcao = Number(prompt("Insira a opção desejada: "));
        espacamentoDuplo();

        switch (opcao) {
            case 1:
                debito = true;
                solicitarDadosCartao();
                break;
            case 2:
                credito = true;
                solicitarDadosCartao();
                break;
            case 3:
                pix = true;
                console.log("Gerando QR code");
                let conteudoQR = "Pagamento aprovado";
                QRCode.generate(conteudoQR, { small: true });
                espacamentoDuplo();
                console.log("\nProsseguindo para entrega.");
                espacamentoDuplo();
                break;
            case 4:
                pagarNaEntrega = true;
                console.log("Prosseguindo para entrega.");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
};

module.exports = sistemaCompras;
