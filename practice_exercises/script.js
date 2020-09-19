// ----- Exercise 1 ----------------------------------------------
var counter = 0;
document.getElementById('result').innerHTML = counter;
var resultCmp = document.getElementById('result')

function countUp(){
  counter += 1;
  resultCmp.innerHTML= counter;
  // it changes html inner element content!
}

function countDown(){
  counter -= 1;
  resultCmp.innerHTML= counter;
}

// how to add action to a button --- addEventListener
// click is predefined
document.getElementById('countUpBtn').addEventListener('click',countUp);
document.getElementById('countUpBtn').addEventListener('contextmenu',countDown);


// ----- Exercise 2 ----------------------------------------------

function good(){
  document.getElementById('answerBtn').innerHTML='That is great😊';
}
function awesome(){
  document.getElementById('answerBtn').innerHTML='Even better 😃'; 
}
document.getElementById('goodBtn').addEventListener('click',good);
document.getElementById('awesomeBtn').addEventListener('click',awesome);