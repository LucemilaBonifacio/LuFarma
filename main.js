var prompt = require('prompt-sync')();

ListaRemedios = [
    {nome: 'Dipirona', preco: 10},
    {nome: 'Benegripe', preco: 20},
    {nome: 'Paracetamol', preco: 15},
    {nome: 'Vitamina C', preco: 25}
]

ListaCosmeticos = [
    {nome: 'Sabonete', preco: 8},
    {nome: 'Hidratante', preco: 55},
    {nome: 'Perfume', preco: 75},
    {nome: 'Esmalte', preco: 5}
]

function linha() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
}

function DoisEspacos() {
    console.log();
    console.log();
}

function titulo(msg) { // recebe a mensagem a ser destaca como parâmetro, a msg deve estar entre ""
    linha();
    console.log(msg)
    linha();
    DoisEspacos()
}

function MenuInicial() {
    linha();    
    console.log('Selecione a opção desejada!');
    linha();
    console.log('(1) Comprar remédio');
    console.log('(2) Comprar cosmético');
    console.log('(3) Serviço da Lufarma');
    console.log('(4) Serviço de terceiros');
    console.log('(5) Sair');
    linha();
    DoisEspacos()
}

function MostrarLista(lista) { // recebe como parâmetro a lista de remedios em estoque
    titulo('Mostrando Remédios disponíveis...')
    
    for (let c = 0; c < lista.length; c++) {
        console.log(`\tNome: ${lista[c].nome}              Preço: ${lista[c].preco}`);
    }
    DoisEspacos()
}

//function AdcionarCarrinho () {}

function MenuRoteador() {
    let seguir = prompt('Selecione a opção desejada: ');

    if(seguir == '1') {
        MostrarLista(ListaRemedios)
    } else if(seguir == '2') {
        MostrarLista(ListaCosmeticos)
    } else if(seguir == '3') {

    } else if(seguir =='4') {

    } else if(seguir == '5') {
        console.log('Obrigado pela preferência! Volte sempre!')
    }
}

MenuInicial()
MenuRoteador()
