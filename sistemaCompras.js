var prompt = require('prompt-sync')();
var QRCode = require('qrcode-terminal');
const chalk = require("chalk");
const carrinho = require('./carrinho');
const finalizarCompra = require('./sistemaEntrega');


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
        let tentarNovamente;
        

        function espacamentoDuplo() {
            console.log();
            console.log();
        }


        function solicitarDadosCartao() {
            let dadosCartao, codCartao, tentarNovamente;
        
            do {
                dadosCartao = prompt("Insira o número do cartão: ");
                codCartao = prompt("Insira código de segurança: ");
                divisoria();
                espacamentoDuplo();
        
                if (dadosCartao.length === 16 && codCartao.length === 3) {
                    console.clear();
                    divisoria();
                    console.log(chalk.bold.green("Pagamento aprovado \n\nProsseguindo para entrega."));
                    divisoria();
                    finalizarCompra.mostrarTela();
                    break;
                } else {
                    console.log(chalk.bold.red("Dados inválidos."));
                    tentarNovamente = prompt("Deseja tentar novamente? (s/n): ").toLowerCase();
                }
            } while (tentarNovamente === "s");
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
                let conteudoQR = "https://feepay.com.br/wp-content/uploads/2021/11/PAGAMENTO-APROVADO-PELO-LINK-DE-PAGAMENTO-FEEPAY-984x1024.jpg";
                QRCode.generate(conteudoQR, { small: true });

                //console.clear();
                divisoria();
                console.log(chalk.bold.green("Pagamento aprovado \n\nProsseguindo para entrega."));
                divisoria();
                finalizarCompra.mostrarTela();

                // espacamentoDuplo();
                // console.log(chalk.bold.green("\nProsseguindo para entrega."));
                // espacamentoDuplo();
                break;
            case 4:
                pagarNaEntrega = true;
                divisoria();
                console.log(chalk.bold.green("Prosseguindo para entrega."));
                divisoria();
                finalizarCompra.mostrarTela();
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