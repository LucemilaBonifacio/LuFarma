const prompt = require('prompt-sync')();
const listaCosmeticos = require('./listaCosmeticos');
const listaMedicamentos = require('./listaMedicamentos'); //listas de medicamentos e cosmeticos importadas
const chalk = require("chalk");
const menuInicial = require("./menuInicial");
const sistemaCompras = require('./sistemaCompras');
const login = require('./login');

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
            console.log(chalk.yellow("5 -> Menu Inicial")); 
            espacamentoDuplo();
            opcao = Number(prompt("Escolha uma opção: "));

            switch (opcao) {
                case 1:
                    console.clear();
                    this.adicionarItem();
                    break;
                case 2:
                    console.clear();
                    this.visualizarCarrinho();
                    break;
                case 3:
                    console.clear();
                    this.removerItem();
                    break;
                case 4:  // segue para o pagamento
                    espacamentoDuplo();
                    if (this.itens.length === 0) {
                        console.clear();
                        console.log(chalk.bold.red("O carrinho está vazio."));
                        console.log();
                    }else{
                        console.clear();
                        divisoria();
                        console.log(chalk.bold.green("Prosseguindo para pagamento..."));
                        divisoria();
                        login.mostrarTela();
                        sistemaCompras.mostrarTela();
                    }
                    break;
                case 5: // Caso de sair do menu do carrinho
                    console.clear();
                    console.log(chalk.bold.green("Voltando para o Menu Inicial.")); 
                    espacamentoDuplo();
                    break;
                    //process.exit(0);
                    default:
                        console.log("Opção inválida. Tente novamente.");
                    }
                    
        } while (opcao !== 5); // Continua o loop até que o usuário escolha a opção 4
    },

    adicionarItem: function() {
        espacamentoDuplo();
        console.log(chalk.bold.yellow("Categorias: \n\n    M -> Medicamentos  \n    C -> Cosmeticos \n \n "));
        let categoria = prompt("Escolha a categoria: ");
        espacamentoDuplo();
        if (categoria.toLowerCase() === "m" || categoria.toLowerCase() === "c") {
            this.exibirItensDisponiveis(categoria);
            espacamentoDuplo();
            let escolha = Number(prompt("Escolha o número do item para adicionar ao carrinho: ")) - 1;
            espacamentoDuplo();

            if (categoria.toLowerCase() === "m") {
                if (escolha >= 0 && escolha < listaMedicamentos.length) {
                    let item = listaMedicamentos[escolha];
                    espacamentoDuplo();
                    let quantidade = Number(prompt(`Quantas unidades de ${item.nome} deseja adicionar? `));
                    espacamentoDuplo();
                    if (quantidade > 0) {
                        for (let i = 0; i < quantidade; i++) {
                            this.itens.push(item);
                        }
                        console.clear();
                        console.log(chalk.bold.green(`${quantidade} unidades de ${item.nome} foram adicionadas ao carrinho por R$ ${item.preco.toFixed(2)} cada.`));
                        divisoria();
                    } else {
                        espacamentoDuplo();
                        console.log("Quantidade inválida. Tente novamente.");
                    }
                } else {
                    console.log("Opção inválida. Tente novamente.");
                }
            } else if (categoria.toLowerCase() === "c") {
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
        if (categoria.toLowerCase() === 'm') {
            listaMedicamentos.forEach((item, index) => {
                console.log(`${index + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}`);
            });
        } else if (categoria.toLowerCase() === 'c') {
            listaCosmeticos.forEach((item, index) => {
                console.log(`${index + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}`);
            });
        }
    },

    visualizarCarrinho: function() {
        if (this.itens.length === 0) {
            console.clear();
            console.log(chalk.bold.red("O carrinho está vazio."));
            console.log();
        } else {
            console.clear();
            espacamentoDuplo();
            console.log("Itens no carrinho:");
            console.log();
            let total = 0;
            this.itens.forEach((produto, index) => {
                console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
                total += produto.preco;
                
            });
            console.log();
            console.log(`Total: R$ ${total.toFixed(2)}`);
            espacamentoDuplo();
        }
    },

    removerItem: function() {
        if (this.itens.length === 0) {
            console.clear();
            espacamentoDuplo();
            console.log(chalk.bold.red("Carrinho Vazio !!!"));
            espacamentoDuplo();
        }else {
            if (this.itens.length !== 0) {
                espacamentoDuplo();
                this.visualizarCarrinho(); // Exibe os itens no carrinho para o usuário escolher o que remover
                let indice = Number(prompt("Escolha o número do item para remover do carrinho: ")) - 1;
                espacamentoDuplo();
                
                if (indice >= 0 && indice < this.itens.length) {
                    let itemRemovido = this.itens.splice(indice, 1)[0]; // Remove o item do carrinho
                    console.clear();
                    console.log();
                    console.log(`O item ${itemRemovido.nome} foi removido do carrinho.`);
                    espacamentoDuplo();
                } else {
                    console.log("Número inválido. Tente novamente.");
                };
            }
        };
        
    }

}
    

module.exports = carrinho;
