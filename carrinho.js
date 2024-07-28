const prompt = require('prompt-sync')();
const listaCosmeticos = require('./listaCosmeticos');
const listaMedicamentos = require('./listaMedicamentos'); //listas de medicamentos e cosmeticos importadas
const chalk = require("chalk");

function espacamentoDuplo() {
    console.log();
    console.log();
}

function divisoria() {
    console.log(chalk.red("\n==================================================================\n"));
}

const carrinho = {
    itens: [], // Armazena os itens no carrinho

    mostrarTela: function () {
        let opcao;
        
        do {
            console.log(chalk.yellow("Menu de compras"));
            divisoria();
            console.log(chalk.yellow("1 -> Adicionar item ao carrinho"));
            console.log(chalk.yellow("2 -> Visualizar carrinho"));
            console.log(chalk.yellow("3 -> Remover item do carrinho"));
            console.log(chalk.yellow("4 -> Seguir para pagamento"));
            console.log(chalk.yellow("5 -> Voltar ao menu principal")); 
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
                    espacamentoDuplo();
                    console.log(chalk.bold.green("Prosseguindo para pagamento..."));
                    divisoria();
                    // segue para o pagamento
                    break;
                case 5: // Caso de voltar ao menu principal
                    console.log(chalk.bold.red("Voltando ao menu principal..."));
                    espacamentoDuplo();
                    return true; // Indica que o usuário deseja voltar ao menu principal
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        } while (opcao !== 4); // Continua o loop até que o usuário escolha a opção 4
    },

    adicionarItem: function() {
        let categoria = prompt("Escolha a categoria (medicamentos/cosmeticos): ");
        espacamentoDuplo();
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
                        espacamentoDuplo();
                        console.log(`${quantidade} unidades de ${item.nome} foram adicionadas ao carrinho por R$ ${item.preco.toFixed(2)} cada.`);
                    } else {
                        espacamentoDuplo();
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
            if (this.itens.length === 0) { // Verifica se o carrinho está vazio
                console.log(chalk.bold.yellow("Não há itens no carrinho para remover."));
                return;
            }
    
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
