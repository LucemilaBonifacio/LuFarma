var prompt = require('prompt-sync')();
var QRCode = require('qrcode-terminal');
const chalk = require("chalk");
const carrinho = require('./carrinho');


function divisoria() {
    console.log(chalk.red("\n==================================================================\n"));
}

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
            divisoria();
            espacamentoDuplo();
            if (dadosCartao.length === 16) {
                console.log(chalk.bold.green("Pagamento aprovado \nProsseguindo para entrega."));
            } else {
                console.log(chalk.bold.red("Dados inválidos, tente novamente."));
            }
        }

        console.log(chalk.yellow("Como deseja pagar?"));
        divisoria();
        espacamentoDuplo();
        console.log(chalk.yellow(" 1 -> Débito \n 2 -> Crédito \n 3 -> Pix \n 4 -> Pagar na entrega \n 5 -> Voltar para o Carrinho \n"));
        divisoria();
        espacamentoDuplo();

        let opcao = Number(prompt("Insira a opção desejada: "));
        divisoria();
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
                console.log(chalk.bold.green("Gerando QR code"));
                let conteudoQR = "Pagamento aprovado";
                QRCode.generate(conteudoQR, { small: true });
                espacamentoDuplo();
                console.log(chalk.bold.green("\nProsseguindo para entrega."));
                espacamentoDuplo();
                break;
            case 4:
                pagarNaEntrega = true;
                console.log(chalk.bold.green("Prosseguindo para entrega."));
                break;
            case 5:
                console.clear();
                espacamentoDuplo();
                console.log(chalk.bold.red("voltando para o carrinho."));
                espacamentoDuplo();
                break;
                default:
                    console.log(chalk.bold.red("Opção inválida. Tente novamente."));
                }
            }
        };

module.exports = sistemaCompras;
