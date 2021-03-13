document.getElementById('header-container').style = 'background-color: green';

document.querySelector('.emergency-tasks').style = 'background-color: orange';

let aga3 = document.querySelectorAll('.emergency-tasks div h3');

for (let i = 0; i < aga3.length; i += 1) {
  aga3[i].style = 'background-color: purple';
}

document.getElementsByClassName('no-emergency-tasks')[0].style = 'background-color: yellow';

let oaga3 = document.querySelectorAll('.no-emergency-tasks div h3');

for (let j = 0; j < oaga3.length; j += 1) {
  oaga3[j].style = 'background-color: black';
}

document.getElementById('footer-container').style = 'background-color: green'