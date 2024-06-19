document.addEventListener('DOMContentLoaded', () => {
  function displayOnscreen(str){
    let input = document.createTextNode(str);
    screen.appendChild(input);
  }

  function add(arr){
    return arr.reduce((sum, item) => parseFloat(sum) + parseFloat(item));
  }

  function sub(arr){
    return arr.reduce((sum, item) => parseFloat(sum) - parseFloat(item));
  }

  function store(str){
    if(['%','/','*','-','+'].includes(str)){
      operatorCount++
      if(operatorCount > 1){
        operatorCount = 1;
        operationArr.push(number);
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
      console.log(number);
      }
  }

  function operation(secondOperator){
    for(let i=0; i<operationArr.length; i++){
      if (operationArr[i] === '+' || operationArr[i] === '-' || operationArr[i] === '%' || operationArr[i] === '/' || operationArr[i] === '*'){
        console.log(operationArr)
        caseSelector = operationArr.splice(operationArr.indexOf(operationArr[i]), 1)[0];
        console.log(operationArr)
        i--;
      } else {
        continue;
      }
    }
        let ans;
        switch(caseSelector[0]){
          case '+':
            ans = add(operationArr);
            break;
          case '-':
            ans = sub(operationArr);
            break;
          case '%':
            ans = mod(operationArr);
            break;
          case '/':
            ans = div(operationArr);
            break;
          case '*':
            ans = multi(operationArr);
            break;
        }
        operationArr = [];
        number = 0;
        operationArr.push(String(ans));
        console.log(operationArr);
        if (secondOperator === '='){
          screen.textContent = `${operationArr[0]}`;
        } else {
          operationArr.push(secondOperator);
          console.log(operationArr);
          operatorCount++;
          screen.textContent = `${operationArr[0]}${secondOperator}`;
        }
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
        operatorCount = 0;
        console.log(operationArr);
        operation('=');
        break;
    }
  })
});