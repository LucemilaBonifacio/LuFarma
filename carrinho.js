var prompt = require('prompt-sync')();
const listaCosmeticos = require("./listaCosmeticos");
const listaMedicamentos = require("./listaRemedios");

let carrinho = [];

function espacamentoDuplo() {
    console.log();
    console.log();
}

function exibirItensDisponiveis(categoria) {  //exibe os itens por categoria, sendo medicamentos ou cosmeticos
    console.log("Itens disponíveis:");
    if (categoria === 'medicamentos') {
        listaMedicamentos.forEach((item, index) => {
            console.log(`${index + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}`);
        });
    } else if (categoria === 'cosmeticos') {
        listaCosmeticos.forEach((item, index) => {
            console.log(`${index + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}`);
        });
    }
}

function adicionarItem() { //abre a lista para que o usuario escolha o produto no catalogo por numero
    let categoria = prompt("Escolha a categoria (medicamentos/cosmeticos): ");
    if (categoria === 'medicamentos' || categoria === 'cosmeticos') {
        exibirItensDisponiveis(categoria);
        let escolha = Number(prompt("Escolha o número do item para adicionar ao carrinho: ")) - 1;
        if (categoria === 'medicamentos') {
            if (escolha >= 0 && escolha < listaMedicamentos.length) {
                let item = listaMedicamentos[escolha];
                carrinho.push(item);
                console.log(`${item.nome} foi adicionado ao carrinho por R$ ${item.preco.toFixed(2)}`);
            } else {
                console.log("Opção inválida. Tente novamente.");
            }
        } else if (categoria === 'cosmeticos') {
            if (escolha >= 0 && escolha < listaCosmeticos.length) {
                let item = listaCosmeticos[escolha];
                carrinho.push(item);
                console.log(`${item.nome} foi adicionado ao carrinho por R$ ${item.preco.toFixed(2)}`);
            } else {
                console.log("Opção inválida. Tente novamente.");
            }
        }
    } else {
        console.log("Categoria inválida. Tente novamente.");
    }
}

function visualizarCarrinho() { //abre o carrinho para o usuario ver o nome e os preços
    if (carrinho.length === 0) {
        console.log("O carrinho está vazio.");
        espacamentoDuplo();
    } else {
        console.log("Itens no carrinho:");
        espacamentoDuplo();
        let total = 0;
        carrinho.forEach((produto, index) => {
            console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
            total += produto.preco;
        });
        console.log(`Total: R$ ${total.toFixed(2)}`);
    }
}

function menuPrincipal() { //menu principal com as opções ao usuário
    let opcao;
    do {
        console.log("Menu:");
        espacamentoDuplo();
        console.log("1 -> Adicionar item ao carrinho");
        console.log("2 -> Visualizar carrinho");
        console.log("3 -> Prosseguir para pagamento");
        espacamentoDuplo();
        opcao = Number(prompt("Escolha uma opção: "));

        switch (opcao) {
            case 1:
                espacamentoDuplo();
                adicionarItem();
                espacamentoDuplo();
                break;
            case 2:
                espacamentoDuplo();
                visualizarCarrinho();
                espacamentoDuplo();
                break;
            case 3:
                espacamentoDuplo();
                console.log("Prosseguindo para pagamento...");
                espacamentoDuplo();
                break;
            default:
                espacamentoDuplo();
                console.log("Opção inválida. Tente novamente.");
                espacamentoDuplo();
        }
    } while (opcao !== 3);
}

menuPrincipal();

module.exports = carrinho;