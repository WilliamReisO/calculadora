const { eventNames } = require("process")

const calculadora = document.querySelector(' calculadora');
const chaves = calculadora.querySelector('chaves');

chaves.addEventListener('click' , event => {
    if(event.target.matches('button')) {

    } 
    const chave = event.target
    const action = chave.dataset.action

    if(!action){
        console.log('chave numerica !')
    }
    if(
        action ==='add' ||
        action ==='subtract' ||
        action ==='multiply' ||
        action ==='divide' 
    ){
        console.log('chave de operação !')
    }
})

