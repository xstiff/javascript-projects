let name = 'Linda';
let greeting = 'Hi there ';

function hello() {
  msg = greeting + name;
  console.log(msg);


  document.getElementById('hithere').innerText = msg;
}

let n1 = 8;
let n2 = 2;


document.getElementById('num1-el').textContent = n1;
document.getElementById('num2-el').textContent = n2;



function add() {
 console.log('add') 
 result = parseInt(n1) + parseInt(n2);

 document.getElementById('sum-el').textContent = 'Sum: ' + result;

}

function subtract() {
  console.log('subtract') 
  result = parseInt(n1) - parseInt(n2);

  document.getElementById('sum-el').textContent = 'Sum: ' + result;
 }

 function divide() {
  console.log('divide') 
  result = parseInt(n1) / parseInt(n2);

  document.getElementById('sum-el').textContent = 'Sum: ' + result;
 }

 function multiply() {
  console.log('multiply') 
  result = parseInt(n1) * parseInt(n2);

  document.getElementById('sum-el').textContent = 'Sum: ' + result;
 }