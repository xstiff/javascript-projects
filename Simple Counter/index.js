let saved = 0;

let element = document.getElementById('l-counting');

function save(){
  console.log('[Saved] ', saved,' => ', element.innerText);
  saved = element.innerText;
}

function load() {
  console.log('[Loaded] ', element.innerText,' => ', saved);
  element.innerText = saved;
}

function add() {
  console.log('[Addition] ',element.innerText, ' => ', parseInt(element.innerText)+1);
  element.innerText = parseInt(element.innerText) + 1
}

function remove() {
  if ((parseInt(element.innerText) - 1) >= 0)  {
  console.log('[Subtraction] ',element.innerText, ' => ', parseInt(element.innerText)-1);
  element.innerText = parseInt(element.innerText) - 1 
  }
  else {console.log('[Subtraction] Cannot go below')}
}


function reset() {
  console.log('[Reset] ',element.innerText, ' => ', 0);
  element.innerText = 0;
}