var prompt = require('prompt-sync')();

ListaRemedios = [
    {nome: 'Dipirona', valor: 10},
    {nome: 'Benegripe', valor: 20},
    {nome: 'Paracetamol', valor: 15},
    {nome: 'Vitamina C', valor: 25}
]

function linha() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
}

function DoisEspacos() {
    console.log();
    console.log();
}

function MenuInicial() {
    linha();    
    console.log('Selecione a opção desejada!');
    linha();
    console.log('(1) Comprar remédio');
    console.log('(2) Comprar cosmético');
    console.log('(3) Serviço da Lufarma');
    console.log('(4) Serviço de terceiros');
    linha();
    DoisEspacos()
}

function MostrarRemedios(lista) { // recebe como parâmetro a lista de remedios em estoque
    for (let c = 0; c < lista.lenght; c++) {
        console.log(c)
    }
}

//function AdcionarCarrinho () {}

function MenuRoteador() {
    let seguir = prompt('Selecione a opção desejada: ');

    if(seguir == '1') {
        MostrarRemedios(ListaRemedios)
    }
}

MenuInicial()
MenuRoteador()
