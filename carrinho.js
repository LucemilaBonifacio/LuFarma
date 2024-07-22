var prompt = require('prompt-sync')();
const listaCosmeticos = require('./listaCosmeticos');
const listaMedicamentos = require('./listaRemedios');

let carrinho = [];

//criar espaçamento no terminal
function espacamentoDuplo() {
    console.log();
    console.log();
}

//exibir itens disponíveis na categoria selecionada
function exibirItensDisponiveis(categoria) {
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

//adicionar itens ao carrinho
function adicionarItem() {
    let categoria = prompt("Escolha a categoria (medicamentos/cosmeticos): ");
    if (categoria === 'medicamentos' || categoria === 'cosmeticos') {
        exibirItensDisponiveis(categoria);
        let escolha = Number(prompt("Escolha o número do item para adicionar ao carrinho: ")) - 1;

        if (categoria === 'medicamentos') {
            if (escolha >= 0 && escolha < listaMedicamentos.length) {
                let item = listaMedicamentos[escolha];
                let quantidade = Number(prompt(`Quantas unidades de ${item.nome} deseja adicionar? `));
                if (quantidade > 0) {
                    for (let i = 0; i < quantidade; i++) {
                        carrinho.push(item);
                    }
                    console.log(`${quantidade} unidades de ${item.nome} foram adicionadas ao carrinho por R$ ${item.preco.toFixed(2)} cada.`);
                } else {
                    console.log("Quantidade inválida. Tente novamente.");
                }
            } else {
                console.log("Opção inválida. Tente novamente.");
            }
        } else if (categoria === 'cosmeticos') {
            if (escolha >= 0 && escolha < listaCosmeticos.length) {
                let item = listaCosmeticos[escolha];
                let quantidade = Number(prompt(`Quantas unidades de ${item.nome} deseja adicionar? `));
                if (quantidade > 0) {
                    for (let i = 0; i < quantidade; i++) {
                        carrinho.push(item);
                    }
                    console.log(`${quantidade} unidades de ${item.nome} foram adicionadas ao carrinho por R$ ${item.preco.toFixed(2)} cada.`);
                } else {
                    console.log("Quantidade inválida. Tente novamente.");
                }
            } else {
                console.log("Opção inválida. Tente novamente.");
            }
        }
    } else {
        console.log("Categoria inválida. Tente novamente.");
    }
}

//visualizar os itens no carrinho
function visualizarCarrinho() {
    if (carrinho.length === 0) {
        console.log("O carrinho está vazio.");
    } else {
        console.log("Itens no carrinho:");
        let total = 0;
        carrinho.forEach((produto, index) => {
            console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
            total += produto.preco;
        });
        console.log(`Total: R$ ${total.toFixed(2)}`);
    }
}

//exibe o menu principal e gerenciar a interação com o usuário
function menuPrincipal() {
    let opcao;
    do {
        espacamentoDuplo();
        console.log("Menu:");
        console.log("1 -> Adicionar item ao carrinho");
        console.log("2 -> Visualizar carrinho");
        console.log("3 -> Seguir para pagamento");
        espacamentoDuplo();
        opcao = Number(prompt("Escolha uma opção: "));

        switch (opcao) {
            case 1:
                adicionarItem();
                break;
            case 2:
                visualizarCarrinho();
                break;
            case 3:
                console.log("Prosseguindo para pagamento...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 3);
}


menuPrincipal();

module.exports = carrinho;