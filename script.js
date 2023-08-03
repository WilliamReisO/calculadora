const { eventNames } = require("process")

const calculadora = document.querySelector(' calculadora');
const chaves = calculadora.querySelector('chaves');

chaves.addEventListener('click' , event => {
    if(event.target.matches('button')) {
        const chave = event.target
        const action = chave.dataset.action
        const keyContent = chave.textContent
        const displayedNum = display.textContent

        //remove a classe .is-depressed de todas as teclas
        Array.from(chave.parentNode.children)
             .forEach(chave.classList.remove('is-depressed'))
    } 
    
   if(!action){
    if(displayedNum === '0'){
        display.textContent = chaveContent
    }else {
        display.textContent = displayedNum + chaveContent
    }
   }

    if(!action){
        console.log('chave numerica !')
    }
    if(
        action ==='add' ||
        action ==='subtract' ||
        action ==='multiply' ||
        action ==='divide' 
    ){
        chave.classList.add('is-depressed')
        //Adiciona um atributo personalizado 
        calculadora.dataset.previousChaveType = 'operator'
    }
    if (action === 'decimal') {
        display.textContent = displayedNum + '.'
        console.log('chave decimal !')
      }
      
      if (action === 'clear') {
        console.log('chave clear !')
      }
      
      if (action === 'calculate') {
        console.log('chave equal !')
      }

      const previousChaveType = calculadora.dataset.previousChaveType

      if(!action){
        if(displayedNum === '0' || previousChaveType === 'operator'){
            display.textContent = chaveContent
        }else{
            display.textContent = displayedNum + chaveContent
        }
      }
})

