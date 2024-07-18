const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let remedio1 = { id: 1, nome: "Remédio 1", preco: 10.00 };
let remedio2 = { id: 2, nome: "Remédio 2", preco: 20.00 };
let remedio3 = { id: 3, nome: "Remédio 3", preco: 30.00 };
let carrinho = [];

function removerDoCarrinho(id) {
  const index = carrinho.findIndex(item => item.id === id);
  if (index !== -1) {
    carrinho.splice(index, 1);
    console.log(`Item removido do carrinho.`);
  } else {
    console.log("Item não encontrado no carrinho.");
  }
}

function espacamentoDuplo() {
  console.log();
  console.log();
}

console.log("Bem-vindo ao carrinho");

function perguntar() {
  rl.question("Deseja adicionar algo ao carrinho?\n\n1-> Sim\n\n2-> Não\n\nEscolha: ", (resposta) => {
    if (resposta === '1') {
      rl.question('Escolha um remédio para adicionar (1, 2 ou 3): ', (remedioEscolhido) => {
        let remedio;
        if (remedioEscolhido === '1') {
          remedio = remedio1;
        } else if (remedioEscolhido === '2') {
          remedio = remedio2;
        } else if (remedioEscolhido === '3') {
          remedio = remedio3;
        } else {
          console.log('Opção inválida.');
          espacamentoDuplo();
          return perguntar();
        }

        rl.question('Quantas unidades? ', (quantidade) => {
          quantidade = parseInt(quantidade);
          carrinho.push({ ...remedio, quantidade });
          console.log(`${quantidade} unidades de ${remedio.nome} foram adicionadas ao carrinho.`);
          espacamentoDuplo();
          perguntar();
        });
      });
    } else if (resposta === '2') {
      rl.question("Deseja ver ou remover itens do carrinho?\n\n1-> Ver Carrinho\n\n2-> Remover Item\n\n3-> Sair\n\nEscolha: ", (acao) => {
        if (acao === '1') {
          if (carrinho.length === 0) {
            console.log("O carrinho está vazio.");
          } else {
            let total = 0;
            carrinho.forEach(item => {
              const subtotal = item.preco * item.quantidade;
              total += subtotal;
              console.log(`${item.nome} - R$ ${item.preco.toFixed(2)} x ${item.quantidade} = R$ ${subtotal.toFixed(2)}`);
            });
            console.log(`Total: R$ ${total.toFixed(2)}`);
          }
          espacamentoDuplo();
          perguntar();
        } else if (acao === '2') {
          rl.question('Digite o ID do item a ser removido: ', (id) => {
            removerDoCarrinho(parseInt(id));
            espacamentoDuplo();
            perguntar();
          });
        } else if (acao === '3') {
          rl.close();
        } else {
          console.log('Opção inválida.');
          espacamentoDuplo();
          perguntar();
        }
      });
    } else {
      console.log('Opção inválida.');
      espacamentoDuplo();
      perguntar();
    }
  });
}

perguntar();

