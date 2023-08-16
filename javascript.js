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
con.appendChild(plus);
const eq = document.createElement('button');
eq.innerText= "=";
con.appendChild(eq);
const add = function(vaule1,vaule2) {
  const resultAdd= vaule1 + vaule2;
  return resultAdd
}
const subtract = function(vaule1,vaule2) {
  const resultSubtract= vaule1 - vaule2;
  return resultSubtract;
}
const divide = function(vaule1,vaule2) {
  const resultDivide= vaule1 / vaule2;
  return resultDivide;
}
const multiply = function(vaule1,vaule2) {
  const resultMultiply= vaule1 * vaule2;
  return resultMultiply;
}
console.log(add(8,7))
let liveNumber=0;
function try1(){
  liveNumber++;
  const numberText1 =document.createElement('span');
  numberText1.innerText = '1';
  te.appendChild(numberText1)
  console.log(liveNumber)
}
number.addEventListener('click',try1)
function try2(){
  liveNumber= liveNumber+2;
  const numberText2 =document.createElement('span');
  numberText2.innerText = '2';
  te.appendChild(numberText2)
  console.log(liveNumber)
}
let liveNumber2=0;
number2.addEventListener('click',try2)
function plusFunction(){
  const plusText =document.createElement('span');
  plusText.innerText = '+';
  te.appendChild(plusText);
  number.removeEventListener('click',try1)
  number.addEventListener('click',afterPlus)
}
function afterPlus(){
  const numberText1 =document.createElement('span');
  numberText1.innerText = '1';
te.appendChild(numberText1)
  liveNumber2++;
  console.log(liveNumber2)
}
plus.addEventListener('click',plusFunction)
function eqFunction(){
  const eqText =document.createElement('span');
  eqText.innerText = '=';
  te.appendChild(eqText)
  te.remove();
  const resultShow = document.createElement('span');
  resultShow.innerText= (add(liveNumber,liveNumber2))
result.appendChild(resultShow)
}
eq.addEventListener('click',eqFunction)