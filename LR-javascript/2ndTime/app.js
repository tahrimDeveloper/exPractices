function moveThis() {
  const votorDiv = document.getElementById('vitor');
  let position = 0;

  const intervalCreate = setInterval(frameMain, 5);
  
  function frameMain() {
    
  if (position < 350 ) {
    position++;
    votorDiv.style.top = position + 'px';
    votorDiv.style.left = position + 'px';
    } else {
      clearInterval(intervalCreate);
    }
  }
}


function validateForms() {
  let x = document.forms['myForm']['fullName', 'email', 'number'].value;
  if (x == "") {
    alert ('You Must be Fillied Up the form');
  return false;
}
}


function clicka() {
  const clicka = document.getElementById('cl');
  clicka.style.color = 'green';
  clicka.style.fontSize = '30px';
  clicka.style.background = 'black';
}


// document.querySelector(p.lala).style.color = "blue";
//document.getElementsByClassName('cl').style.backgroundColor = 'blue';