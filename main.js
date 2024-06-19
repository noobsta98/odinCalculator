document.addEventListener('DOMContentLoaded', () => {
  function displayOnscreen(str){
    let input = document.createTextNode(str);
    screen.appendChild(input);
  }

  function add(arr){
    return arr.reduce((sum, item) => {
      if(item === ''){
        return sum;
      } else {
        return parseFloat(sum) + parseFloat(item);
      }
    });
  }

  function sub(arr){
    return arr.reduce((sum, item) => {
      if(item === ''){
        return sum;
      } else {
        return parseFloat(sum) - parseFloat(item);
      }
    });
  }

  function div(arr){
    return arr.reduce((sum, item) => {
      if(item === ''){
        return sum;
      } else {
        return parseFloat(sum) / parseFloat(item);
      }
    });  
  }

  function mod(arr){
    return arr.reduce((sum, item) => {
      if(item === ''){
        return sum;
      } else {
        return parseFloat(sum) % parseFloat(item);
      }
    });
  }

  function multi(arr){
    return arr.reduce((sum, item) => {
      if(item === ''){
        return sum;
      } else {
        return parseFloat(sum) * parseFloat(item);
      }
    });
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

  function clear(){
    screen.textContent = ''
    operationArr = [];
    operatorCount = 0;
    number = '';
    screen.textContent = '';
  }

  function checkDecimal(){
    let decimalCount = 0;
    for(let i=0; i<number.length; i++){
      if(number[i].includes('.')){
        decimalCount++
      }
    }
    if(decimalCount > 1) {
      alert('Invalid number')
      clear();
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
        number = '';
        operationArr.push(String(ans));
        console.log(operationArr);
        if (secondOperator === '='){
          screen.textContent = `${operationArr[0]}`;
          console.log(`empty ${number}`)
        } else {
          operationArr.push(secondOperator);
          console.log(operationArr);
          operatorCount++;
          screen.textContent = `${operationArr[0]}${secondOperator}`;
          console.log(`empty ${number}`)
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
        clear();
        break;
      case 'sign':
        if(!number){
          if(operationArr[0]){
            if(operationArr[0] == '0'){
              alert('Invalid');
            } else{
            operationArr[0] = -operationArr[0];
            screen.textContent = operationArr;
            }
          }
        } else if(number){
          if(operationArr[0]){
            if(operationArr[0] == '0'){
              alert('Invalid');
          } else{
              operationArr[0] = -operationArr[0];
              screen.textContent = `${operationArr}${number}`
            }
          } else {
              number = - number;
              screen.textContent = number;
            }
        }
        // }else if (number == '0'){
        //   alert('invalid');
        // } else if (number) {
        //   if(operationArr[0]){
        //     operationArr[0] = -operationArr[0];
        //     screen.textContent = operationArr;
        //   }
        // number = -number;
        // screen.textContent = number;
        // }
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
        checkDecimal();
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