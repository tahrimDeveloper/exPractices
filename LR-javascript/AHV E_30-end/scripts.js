//  'use strict';
 
let userInputa = prompt('Enter your name');
let numbera = parseInt(userInputa);

if (numbera % 2 === 0) {console.log(`${numbera} is even number`)} else {console.log(`${numbera} is odd number`);}


//project 1 bgColor
const bgColor =document.getElementById('divs');
const proColor = document.querySelectorAll('li');

// proColor.forEach(function (valu) {
//   valu.addEventListener('click', function() {
//     bgColor.style.backgroundColor= '#fd79a8';
//   });
// });

proColor.forEach(function (value) {
  value.addEventListener('click', function() {
  let className = this.classList[0];
  let color = '';
  if (className === 'pink') {
    color = '#fd79a8';}
  if (className === 'blue') {
    color = '#3498db';}
  if (className === 'green') {
    color = '#2ecc71';}
  if (className === 'red') {
    color = '#e74c3c';}
  if (className === 'purple') {
    color = '#9b59b6';}
  bgColor.style.backgroundColor = color; 
  });});


  



//single Edit
 document.querySelector('h1').innerText= 'As Salamu Alaikum ya Habibi';

 let h2Edit = document.querySelector('h2');
  h2Edit.innerText= h2Edit.innerText + ' Subahanallah';

  //btn and something with js
const divStyle= document.querySelector('#smile2jannah')
  divStyle.style.backgroundColor= 'lightblue';
  divStyle.style.width ='98%';
  divStyle.style.height= 'auto';
  divStyle.style.padding= '10px';
  divStyle.style.marginBottom = '20px';

  let btnInDiv =document.createElement('button');
    btnInDiv.innerText= 'Click Me';
    divStyle.appendChild(btnInDiv);
    btnInDiv.addEventListener('click', function() {
    document.querySelector('button').innerText= 'Clicked 😍' + 1;
    } );
  

// multiple div edit 
let boxes = document.querySelectorAll('.flexss');
boxes[1].innerText= 'Masha Allah';
boxes[2].innerText= 'Alhamdulillah';

let boxesNumber = 01;
for (flexss of boxes) {
  flexss.innerText = `box no ${boxesNumber}`; boxesNumber++;}

boxes[0].innerText= 'Allahu Akbar';


// div edit by id name with difficult way 
document.getElementById('smileforsunnah').style.backgroundColor= 'lightgreen';
document.getElementById('smileforsunnah').style.width= '100px';
document.getElementById('smileforsunnah').style.float= 'right';
document.getElementById('smileforsunnah').style.height= '100px';
document.getElementById('smileforsunnah').style.marginBottom = '20px';

// div style with easy way

 const divStyleClass = document.querySelector('.smile4sunnah')
 divStyleClass.style.backgroundColor= 'blue';
 divStyleClass.style.width ='20%';
 divStyleClass.style.height= '150px';
 divStyleClass.style.display= 'inline-block';
 divStyleClass.style.paddingRight = '5px'; //and so on

// ul style with loop
const ulStyle = document.querySelectorAll('ul, li, a');
ulStyle[1].style.color= 'red';

ulStyle.forEach(function(i) {
  i.style.color= 'black';
  i.style.fontSize= '10px';
  i.style.fontWeight= 'bold';
  i.style.textDecoration= 'none';
  i.style.display= 'inline-block';
  i.style.marginLeft= '10px';
  i.style.listStyle= 'none';
});