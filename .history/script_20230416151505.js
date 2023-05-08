// Get all the Reject buttons
const rejectButtons = document.querySelectorAll('.reject');
const form = document.querySelector('form');

// Add a click event listener to each Reject button
rejectButtons.forEach(button => {
  button.addEventListener('click', event => {
    // Find the row that contains the clicked button and remove it
    const row = event.target.parentNode.parentNode;
    row.remove();
  });
});


form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting
  const name = document.getElementById('name').value;
  const startDate = document.getElementById('start date').value;
  const numOfDays = document.getElementById('# of days').value;
  const typeOfLeave = document.getElementById('type of leave').value;
  const photo = document.getElementById('photo').value;

  // Do something with the form data, such as sending it to a server
  console.log(name, startDate, numOfDays, typeOfLeave, photo);
});