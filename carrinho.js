const prompt = require('prompt-sync')();
const listaCosmeticos = require('./listaCosmeticos');
const listaMedicamentos = require('./listaMedicamentos');

function espacamentoDuplo() {
    console.log();
    console.log();
}

const carrinho = {
    itens: [],

    exibirItensDisponiveis: function(categoria) { //exibe os itens disponiveis elecando por numero para facilitar a escolha
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
    },

    adicionarItem: function() {  //pergunta ao usuário qual lista de produtos ele deseja ver
        let categoria = prompt("Escolha a categoria (medicamentos/cosmeticos): ");
        if (categoria === 'medicamentos' || categoria === 'cosmeticos') {
            this.exibirItensDisponiveis(categoria);
            espacamentoDuplo();
            let escolha = Number(prompt("Escolha o número do item para adicionar ao carrinho: ")) - 1;
            espacamentoDuplo();

            if (categoria === 'medicamentos') { //pergunta a quantidade do mesmo item o usuário quer colocar no carrinho
                if (escolha >= 0 && escolha < listaMedicamentos.length) {
                    let item = listaMedicamentos[escolha];
                    let quantidade = Number(prompt(`Quantas unidades de ${item.nome} deseja adicionar? `));
                    espacamentoDuplo();
                    if (quantidade > 0) {
                        for (let i = 0; i < quantidade; i++) {
                            this.itens.push(item);
                        }
                        console.log(`${quantidade} unidades de ${item.nome} foram adicionadas ao carrinho por R$ ${item.preco.toFixed(2)} cada.`);
                    } else {
                        console.log("Quantidade inválida. Tente novamente.");
                    }
                } else {
                    console.log("Opção inválida. Tente novamente.");
                }
            } else if (escolha >= 0 && escolha < listaCosmeticos.length) {
                let item = listaCosmeticos[escolha];
                let quantidade = Number(prompt(`Quantas unidades de ${item.nome} deseja adicionar? `));
                if (quantidade > 0) { 
                    for (let i = 0; i < quantidade; i++) {
                        this.itens.push(item);
                    }
                    console.log(`${quantidade} unidades de ${item.nome} foram adicionadas ao carrinho por R$ ${item.preco.toFixed(2)} cada.`);
                } else {
                    console.log("Quantidade inválida. Tente novamente.");
                }
            } else {
                console.log("Opção inválida. Tente novamente.");
            }
        } else {
            console.log("Categoria inválida. Tente novamente.");
        }
    },

    visualizarCarrinho: function() { //mostra o carrinho para o usuário, juntamente do preço de cada item e do total
        if (this.itens.length === 0) {
            console.log("O carrinho está vazio.");
        } else {
            console.log("Itens no carrinho:");
            let total = 0;
            this.itens.forEach((produto, index) => {
                console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
                total += produto.preco;
            });
            console.log(`Total: R$ ${total.toFixed(2)}`);
        }
    },

    mostrarTela: function() { //função para mostrar o menu principal do carrinho, funciona como um loop
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
                    this.adicionarItem();
                    break;
                case 2:
                    this.visualizarCarrinho();
                    break;
                case 3:
                    console.log("Prosseguindo para pagamento...");
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        } while (opcao !== 3);
    }
};

module.exports = carrinho;
