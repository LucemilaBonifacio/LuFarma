var prompt = require('prompt-sync')();
var QRCode = require('qrcode-terminal');

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

console.log("Como deseja pagar?");
espacamentoDuplo();
let opcao = Number(prompt(" 1 -> Débito \n 2 -> Crédito \n 3 -> Pix \n 4 -> Pagar na entrega \n \n "));
espacamentoDuplo();

switch (opcao) {
    case 1:
        debito = true;
        dadosCartao = prompt("Insira dados do cartão: ");
        codCartao = prompt("Insira código de segurança: ");
        espacamentoDuplo();
        if(dadosCartao.length === 16){
            console.log("Pagamento aprovado \n Prosseguindo para entrega.")
        }else{
            console.log("Dados inválidos, tente novamente.")
        }
        break;
    case 2:
        credito = true;
        dadosCartao = prompt("Insira dados do cartão: ");
        codCartao = prompt("Insira código de segurança: ");
        espacamentoDuplo();
        if(dadosCartao.length === 16){
            console.log("Pagamento aprovado \nProsseguindo para entrega.")
        }else{
            console.log("Dados inválidos, tente novamente.")
        }
        break;
    case 3:
        pix = true;
        console.log("Gerando QR code");
        let chavePix = "chavePixExemplo";
        let descricao = "Descrição do pagamento via Pix";
        let conteudoQR = `Chave Pix: ${chavePix}\nDescrição: ${descricao}`;
        QRCode.generate(conteudoQR, { small: true });
        console.log("Pagamento aprovado\nProsseguindo para entrega.")
    case 4:
        pagarNaEntrega = true;  
        console.log("Prosseguindo para entrega."); 
        break;
    default:
        console.log("Opção inválida. Tente novamente.");
}
