document.addEventListener('DOMContentLoaded', () =>{

  function displayOnScreen(str){
    if(str === 'clear'){
       inputScreen.textContent = ''
       operationArr = [];
    } else{
      value = document.createTextNode(str);
      inputScreen.appendChild(value);
      operationArr.push(str);
    }
}

function add(){
  return operationArr.reduce((acc,item) => acc+Number(item), 0);
}
function division(){
  return operationArr.reduce((acc,item) => acc/Number(item));
}

function operation(){
  for(let i=0; i<operationArr.length; i++){
    if(operationArr[i] !== '%' && operationArr[i] !== '/' && operationArr[i] !== '*' && operationArr[i] !== '-' && operationArr[i] !== '+'){
      continue;
    } else {
        switch(operationArr[i]) {
          case '%':
            operationArr.splice(operationArr.indexOf('%'),1);
            mod();
            break;
          case '/':
            operationArr.splice(operationArr.indexOf('/'),1);
            division();
            break;
          case '*':
            operationArr.splice(operationArr.indexOf('*'),1);
            multiply();
            break;
          case '-':
            operationArr.splice(operationArr.indexOf('-'),1);
            subtract();
            break;
          case '+':
            operationArr.splice(operationArr.indexOf('+'),1);
            ans = add();
            console.log(ans);
            inputScreen.textContent = '';
            value = document.createTextNode(ans);
            inputScreen.appendChild(value);
            break;
        }
     }
  }
}

  let operationArr = [];
  const inputContainer = document.querySelector('.inputs');
  const inputScreen = document.querySelector('.display');
  inputContainer.addEventListener('click', event => {
    target = event.target;
    console.log(target.id);
    switch(target.id){
      
      case 'clear':
        displayOnScreen('clear');
        break;
      case 'sign':

        break;
      case 'mod':
        displayOnScreen('%');
        break;
      case 'div':
        displayOnScreen('/');
      break;
      case 'one':
        displayOnScreen('1');
      break;
      case 'two':
        displayOnScreen('2');
      break;
      case 'three':
        displayOnScreen('3');
      break;
      case 'multi':
        displayOnScreen('*');
      break;
      case 'four':
        displayOnScreen('4');
      break;
      case 'five':
        displayOnScreen('5');
      break;
      case 'six':
        displayOnScreen('6');
      break;
      case 'minus':
        displayOnScreen('-');
      break;
      case 'seven':
        displayOnScreen('7');
      break;
      case 'eight':
        displayOnScreen('8');
      break;
      case 'nine':
        displayOnScreen('9');
      break;
      case 'add':
        displayOnScreen('+');
        break;
      case 'zero':
        displayOnScreen('0');
        break;
      case 'decimal':
        displayOnScreen('.');
        break;
      case 'equal':
        operation();
        console.log(operationArr);
        break;
  }
  });
});