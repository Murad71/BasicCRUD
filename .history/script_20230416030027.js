// get the form element
const form = document.querySelector('form');

// add an event listener to the form's submit button
form.addEventListener('submit', (event) => {
  // prevent the form from submitting normally
  event.preventDefault();

  // get the form inputs' values
  const name = document.getElementById('name').value;
  const startDate = document.getElementById('start date').value;
  const numOfDays = document.getElementById('# of days').value;
  const typeOfLeave = document.getElementById('type of leave').value;
  const photo = document.getElementById('photo').value;

  const displayElement = document.createElement('p');
  displayElement.innerText = `Name: ${name}, Start Date: ${startDate}, # of Days: ${numOfDays}, Type: ${typeOfLeave}, Photo: ${photo}`;

  // append the element to the HTML document
  document.body.appendChild(displayElement);

  // const leaveRequest = { name, startDate, numOfDays, typeOfLeave, photo };
  // localStorage.setItem('leaveRequest', JSON.stringify(leaveRequest));


  // window.location.href = 'temp.html';

});

