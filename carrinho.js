const prompt = require('prompt-sync')();

// Supondo que as listas de itens já foram importadas e a função `espacoDuplo` já está definida
const listaCosmeticos = require('./listaCosmeticos');
const listaMedicamentos = require('./listaMedicamentos');

function espacamentoDuplo() {
    console.log();
    console.log();
}

const carrinho = {
    itens: [], // Armazena os itens no carrinho

    mostrarTela: function () {
        let opcao;
        
        do {
            console.log("Menu do Carrinho");
            espacamentoDuplo();
            console.log("1 -> Adicionar item ao carrinho");
            console.log("2 -> Visualizar carrinho");
            console.log("3 -> Remover item do carrinho");
            console.log("4 -> Seguir para pagamento");
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
                    this.removerItem();
                    break;
                case 4:
                    console.log("Prosseguindo para pagamento...");
                    // Aqui você pode adicionar lógica para prosseguir ao pagamento
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        } while (opcao !== 4); // Continua o loop até que o usuário escolha a opção 4
    },

    adicionarItem: function() {
        let categoria = prompt("Escolha a categoria (medicamentos/cosmeticos): ");
        if (categoria === 'medicamentos' || categoria === 'cosmeticos') {
            this.exibirItensDisponiveis(categoria);
            espacamentoDuplo();
            let escolha = Number(prompt("Escolha o número do item para adicionar ao carrinho: ")) - 1;
            espacamentoDuplo();

            if (categoria === 'medicamentos') {
                if (escolha >= 0 && escolha < listaMedicamentos.length) {
                    let item = listaMedicamentos[escolha];
                    espacamentoDuplo();
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
            } else if (categoria === 'cosmeticos') {
                if (escolha >= 0 && escolha < listaCosmeticos.length) {
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
            }
        } else {
            console.log("Categoria inválida. Tente novamente.");
        }
    },

    exibirItensDisponiveis: function(categoria) {
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

    visualizarCarrinho: function() {
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

    removerItem: function() {
        this.visualizarCarrinho(); // Exibe os itens no carrinho para o usuário escolher o que remover
        espacamentoDuplo();
        let indice = Number(prompt("Escolha o número do item para remover do carrinho: ")) - 1;
        espacamentoDuplo();

        if (indice >= 0 && indice < this.itens.length) {
            let itemRemovido = this.itens.splice(indice, 1)[0]; // Remove o item do carrinho
            console.log(`O item ${itemRemovido.nome} foi removido do carrinho.`);
        } else {
            console.log("Número inválido. Tente novamente.");
        }
        espacamentoDuplo();
    }
};

module.exports = carrinho;
