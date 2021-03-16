function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.



function createDaysOfTheMonth () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const eachDay = dezDaysList[i];
    const eachDayListItem = document.createElement('li');
    eachDayListItem.className = 'day';
    eachDayListItem.innerHTML = eachDay;
    if (eachDay === 24 || eachDay === 25 || eachDay === 31) {
      eachDayListItem.className += ' holiday';
    }
    if (eachDay === 4 || eachDay === 11 || eachDay === 18 || eachDay === 25) {
      eachDayListItem.className += ' friday';
    }

    monthDaysList.appendChild(eachDayListItem);
  };
};

createDaysOfTheMonth();

function createHolidayButton (Feriados) {
  let theHolidayButton = document.createElement('button');
  theHolidayButton.id = 'btn-holiday';
  theHolidayButton.innerText = Feriados;
  let buttonHolidaycontainer = document.querySelector('.buttons-container');
  buttonHolidaycontainer.appendChild(theHolidayButton);
}

createHolidayButton ('Feriados');

let captureHolidayButton = document.querySelector('#btn-holiday');
let allHolidays = document.querySelectorAll('.holiday');
captureHolidayButton.addEventListener('click', changeBackgroundHoliday);

function changeBackgroundHoliday () {
  for (cont = 0; cont < allHolidays.length; cont += 1) {
    if (allHolidays[cont].style.backgroundColor === 'orange') {
      allHolidays[cont].style.backgroundColor = 'rgb(238,238,238)';
    }
    else {
      allHolidays[cont].style.backgroundColor = 'orange';
    };
  };
};

function createFridayButton (SextaFeira) {
  let theFridayButton = document.createElement('button');
  theFridayButton.id = 'btn-friday';
  theFridayButton.innerText = SextaFeira;
  let buttonFridaycontainer = document.querySelector('.buttons-container');
  buttonFridaycontainer.appendChild(theFridayButton);
}

createFridayButton ('Sexta-feira');

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.querySelectorAll('.friday');

  getFridayButton.addEventListener('click', changeTextFridays);

  function changeTextFridays () {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== 'SEXTOU') {
        fridays[index].innerHTML = 'SEXTOU';
    } 
    else {
        fridays[index].innerHTML = fridaysArray[index];
      };
    };
  };
};

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', zoomIn);

  function zoomIn (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  };
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', zoomOut);

  function zoomOut (event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  };
};

dayMouseOver();
dayMouseOut();

addTask ('Projeto');
function addTask (task) {
  let mySpan = document.createElement('span');
  mySpan.innerText = task;
  let myTasks = document.querySelector('.my-tasks');
  myTasks.appendChild(mySpan);
}

addLegendColor ('green');
function addLegendColor (color) {
  let newColor = document.createElement('div');
  newColor.className = 'task';
  newColor.style.backgroundColor = color;
  let myTasks = document.querySelector('.my-tasks');
  myTasks.appendChild(newColor);
}

let divTask = document.querySelector('.task');
divTask.addEventListener('click', addEventColor);

function addEventColor (event) {
  if (event.target.className === 'task'){
    event.target.className += ' selected';
  }
  else {
    event.target.className = 'task';
  }
}