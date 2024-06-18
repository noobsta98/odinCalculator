document.addEventListener('DOMContentLoaded', () => {
  function displayOnscreen(str){
    let input = document.createTextNode(str);
    screen.appendChild(input);
  }

  function add(arr){
    return arr.reduce((sum, item) => sum += Number(item), 0);
  }

  function store(str){
    if(str === '%' || str === '/' || str === '*' || str === '-' || str === '+'){
      operatorCount++
      if(operatorCount > 1){
        operatorCount = 1;
        console.log(operationArr);
        operationArr.push(number);
        console.log(operationArr);
        let secondOperator = str;
        operation(secondOperator);
        number = '';
      } else  {
      operationArr.push(number);
      operationArr.push(str);
      number = '';
      }
    } else {
      number += str;
      }
  }

  function operation(secondOperator){
    operationArr.forEach(item => {
      if(item.includes('+')){
        operationArr.splice(operationArr.indexOf(item), 1);
        ans = add(operationArr);
        operationArr = [];
        operationArr.push(String(ans));
        if (secondOperator === '='){
          screen.textContent = `${ans}`
        } else {
          operationArr.push(secondOperator)
          console.log(operationArr);
          operatorCount++;
          screen.textContent = `${ans}${secondOperator}`
        }
      }
    })

  }

  const inputBtn = document.querySelector('.inputs');
  const screen = document.querySelector('.display');
  let operationArr = [];
  let operatorCount = '';
  let number = '';
  inputBtn.addEventListener('click' , event => {

    switch(event.target.id){
      case 'clear':
        screen.textContent = ''
        operationArr = [];
        operatorCount = 0;
        number = '';
      break;
      case 'sign':
      break;
      case 'mod':
        displayOnscreen('%');
        store('%')
      break;
      case 'div':
        displayOnscreen('/');
        store('/')
      break;
      case 'one':
        displayOnscreen('1');
        store('1')
      break;
      case 'two':
        displayOnscreen('2');
        store('2')
      break;
      case 'three':
        displayOnscreen('3');
        store('3')
      break;
      case 'multi':
        displayOnscreen('*');
        store('*');
      break;
      case 'four':
        displayOnscreen('4');
        store('4');
      break;
      case 'five':
        displayOnscreen('5');
        store('5');
      break;
      case 'six':
        displayOnscreen('6');
        store('6');
      break;
      case 'minus':
        displayOnscreen('-');
        store('-');
      break;
      case 'seven':
        displayOnscreen('7');
        store('7');
      break;
      case 'eight':
        displayOnscreen('8');
        store('8');
      break;
      case 'nine':
        displayOnscreen('9');
        store('9');
      break;
      case 'add':
        displayOnscreen('+');
        store('+');
      break;
      case 'zero':
        displayOnscreen('0');
        store('0');
      break;
      case 'decimal':
        displayOnscreen('.');
        store('.');
      break;
      case 'equal':
        operationArr.push(number);
        number = '';
        operatorCount = 0;
        console.log(operationArr);
        operation('=');
        console.log(operatorCount);
      break;
    }
  })
})