const con = document.querySelector('.container');
const te = document.querySelector('.te');
const result = document.querySelector('.result')
const number =document.createElement('button');
number.innerText=1;
con.appendChild(number);
const number2 =document.createElement('button');
number2.innerText=2;
con.appendChild(number2)
const number3 =document.createElement('button');
number3.innerText=3;
con.appendChild(number3)
const number4 =document.createElement('button');
number4.innerText=4;
con.appendChild(number4)
const number5 =document.createElement('button');
number5.innerText=5;
con.appendChild(number5)
const number6 =document.createElement('button');
number6.innerText=6;
con.appendChild(number6)
const number7 =document.createElement('button');
number7.innerText=7;
con.appendChild(number7)
const number8 =document.createElement('button');
number8.innerText=8;
con.appendChild(number8)
const number9 =document.createElement('button');
number9.innerText=9;
con.appendChild(number9)
const number0 =document.createElement('button');
number0.innerText=0;
con.appendChild(number0)
const plus= document.createElement('button');
plus.innerText="+";
con.appendChild(plus)
const minus= document.createElement('button');
minus.innerText="-";
con.appendChild(minus);
const divdeButton= document.createElement('button');
divdeButton.innerText="/";
con.appendChild(divdeButton);
const multiplyButton= document.createElement('button');
multiplyButton.innerText="*";
con.appendChild(multiplyButton);
const eq = document.createElement('button');
eq.innerText= "=";
con.appendChild(eq);
const add = function(vaule1,vaule2) {
  vaule1=Number(vaule1);
  vaule2=Number(vaule2);
  const resultAdd=(vaule1 + vaule2);
  return resultAdd
}
const subtract = function(vaule1,vaule2) {
  const resultSubtract=(vaule1 - vaule2);
  return resultSubtract;
}
const divide = function(vaule1,vaule2) {
  vaule1=Number(vaule1);
  vaule2=Number(vaule2);
  const resultDivide= (vaule1 / vaule2);
  return resultDivide;
}
const multiply = function(vaule1,vaule2) {
  vaule1=Number(vaule1);
  vaule2=Number(vaule2);
  console.log(vaule1)
  console.log(vaule2)
  const resultMultiply=(vaule1 * vaule2);
  console.log(resultMultiply)
  return resultMultiply;
}
let liveNumber="";
function try1(){
  liveNumber=liveNumber+"1";
  const numberText1 =document.createElement('span');
  numberText1.innerText = 1;
  te.appendChild(numberText1)
  console.log(liveNumber)
}
number.addEventListener('click',try1)
function try2(){
  liveNumber= liveNumber+"2";
  const numberText =document.createElement('span');
  numberText.innerText = 2;
 te.appendChild(numberText)
  console.log(liveNumber)
}
let liveNumber2="";
number2.addEventListener('click',try2)
let plusClick=0;
function plusFunction(){
  const plusText =document.createElement('span');
  plusClick=1;
  plusText.innerText = '+';
  te.appendChild(plusText);
  number.removeEventListener('click',try1)
  number.addEventListener('click',afterOpreator)
  number2.removeEventListener('click',try2)
  number2.addEventListener('click',afterOpreator2)
}
let minusClick=0;
function minusFunction(){
  minusClick=1;
  const minusText =document.createElement('span');
  minusText.innerText = '-';
  te.appendChild(minusText);
  number.removeEventListener('click',try1)
  number.addEventListener('click',afterOpreator)
  number2.removeEventListener('click',try2)
  number2.addEventListener('click',afterOpreator2)
  
}
let divideClick=0;
function divideFunction(){
  const divideText =document.createElement('span');
 divideClick=1;
 divideText.innerText = '/';
  te.appendChild(divideText);
  number.removeEventListener('click',try1)
  number.addEventListener('click',afterOpreator)
  number2.removeEventListener('click',try2)
  number2.addEventListener('click',afterOpreator2)
}
let multiplyClick=0;
function multiplyFunction(){
  const multiplyText =document.createElement('span');
 multiplyClick=1;
  multiplyText.innerText = '*';
  te.appendChild(multiplyText);
  number.removeEventListener('click',try1)
  number.addEventListener('click',afterOpreator)
  number2.removeEventListener('click',try2)
  number2.addEventListener('click',afterOpreator2)
}

function afterOpreator(){
  const numberText1 =document.createElement('span');
  numberText1.innerText = 1;
te.appendChild(numberText1)
  liveNumber2=liveNumber2+"1";
  console.log(liveNumber2)
}
function afterOpreator2(){
  const numberText2 =document.createElement('span');
  numberText2.innerText = 2;
te.appendChild(numberText2)
  liveNumber2=liveNumber2+"2";
  console.log(liveNumber2)
}

plus.addEventListener('click',plusFunction)
minus.addEventListener('click',minusFunction)
divdeButton.addEventListener('click',divideFunction)
multiplyButton.addEventListener('click',multiplyFunction)
function eqFunction(){
  const eqText =document.createElement('span');
  eqText.innerText = '=';
  te.appendChild(eqText)
  te.remove();
  const resultShow = document.createElement('span');
  if(plusClick==1){
    resultShow.innerText= (add(liveNumber,liveNumber2))
    result.appendChild(resultShow)
  } else if(minusClick>=1) {
    resultShow.innerText= (subtract(liveNumber,liveNumber2))
    result.appendChild(resultShow)
  }
  else if(divideClick>=1) {
    resultShow.innerText= (divide(liveNumber,liveNumber2))
    result.appendChild(resultShow)
  }else if(multiplyClick>=1) {
    resultShow.innerText= (multiply(liveNumber,liveNumber2))
    result.appendChild(resultShow)
  }
   
}

eq.addEventListener('click',eqFunction)