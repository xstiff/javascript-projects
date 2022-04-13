function update() {
  
  if (parseInt(document.getElementById('input').value) < 0) {
    document.getElementById('input').value = "";
  }
  else if (document.getElementById('input').value == "" ) {
    get_value = 0;
  }
  else {
    get_value = parseInt(document.getElementById('input').value);
  }
  console.log(get_value);


  p = document.getElementById('length')

  p.textContent = get_value + ' meters = ' + (get_value*3.2808399 ).toFixed(2) + ' feet | '+get_value+' feet = '+(get_value*0.3048).toFixed(2)+' meters'
  
  p = document.getElementById('volume')

  p.textContent = get_value + ' liters = ' + (get_value*0.264172052).toFixed(2) + ' gallons | '+get_value+' gallons = '+(get_value*3.785411784).toFixed(2)+' litters'
  
  p = document.getElementById('mass')

  p.textContent = get_value + ' kilos = ' + (get_value*2.20462262 ).toFixed(2) + ' pounds | '+get_value+' pounds = '+(get_value*0.45359237 ).toFixed(2)+' kilos'
  
}

update();