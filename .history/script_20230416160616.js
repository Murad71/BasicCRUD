// Get all the Reject buttons
const rejectButtons = document.querySelectorAll('.reject');

const form = document.querySelector('form');
var tbody = document.querySelector('.tbody1');

// Add a click event listener to each Reject button
rejectButtons.forEach(button => {
  button.addEventListener('click', event => {
    // Find the row that contains the clicked button and remove it
    const row = event.target.parentNode.parentNode;
    row.remove();
  });
});


// Get the table body element


// Get the form elements
var nameInput = document.getElementById('name');
var startDateInput = document.getElementById('start date');
var numOfDaysInput = document.getElementById('# of days');
var typeOfLeaveInput = document.getElementById('type of leave');
var photoInput = document.getElementById('photo');


// Add an event listener to the form submit button
form.addEventListener('click', function(e) {
  e.preventDefault(); // prevent form submission

  // Create a new row element
  var newRow = document.createElement('tr');

  // Create a cell for each form input and append it to the row
  var nameCell = document.createElement('td');
  nameCell.textContent = nameInput.value;
  newRow.appendChild(nameCell);

  var startDateCell = document.createElement('td');
  startDateCell.textContent = startDateInput.value;
  newRow.appendChild(startDateCell);

  var numOfDaysCell = document.createElement('td');
  numOfDaysCell.textContent = numOfDaysInput.value;
  newRow.appendChild(numOfDaysCell);

  var typeOfLeaveCell = document.createElement('td');
  typeOfLeaveCell.textContent = typeOfLeaveInput.value;
  newRow.appendChild(typeOfLeaveCell);

  var photoCell = document.createElement('td');
  var photoImg = document.createElement('img');
  photoImg.src = URL.createObjectURL(photoInput.files[0]); // display uploaded image
  photoImg.alt = 'Photo';
  photoCell.appendChild(photoImg);
  newRow.appendChild(photoCell);

  var optionsCell = document.createElement('td');
  var editLink = document.createElement('a');
  editLink.href = '#';
  editLink.textContent = 'Edit';
  editLink.classList.add('edit');
  optionsCell.appendChild(editLink);

  var rejectLink = document.createElement('a');
  rejectLink.href = '#';
  rejectLink.textContent = 'Reject';
  rejectLink.classList.add('reject');
  optionsCell.appendChild(rejectLink);

  newRow.appendChild(optionsCell);

  // Append the new row to the table body
  tbody.appendChild(newRow);

  // Clear the form inputs
  nameInput.value = '';
  startDateInput.value = '';
  numOfDaysInput.value = '';
  typeOfLeaveInput.value = '';
  photoInput.value = '';
});