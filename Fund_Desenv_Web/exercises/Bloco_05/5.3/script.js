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
    eachDayListItem.innerHTML = eachDay;

    monthDaysList.appendChild(eachDayListItem);
  };
};

createDaysOfTheMonth();

function createHolidayButton (Feriados) {
  const theButton = document.createElement('button');
  theButton.id = 'btn-holiday';
  theButton.innerText = Feriados;
  const buttoncontainer = document.querySelector('.buttons-container');
  buttoncontainer.appendChild(theButton);
}

createHolidayButton ('Feriados');