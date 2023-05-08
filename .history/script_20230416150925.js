// Get all the Reject buttons
const rejectButtons = document.querySelectorAll('.reject');
//Get a reference to the table
const table = document.getElementById(".table1");

// Add a click event listener to each Reject button
rejectButtons.forEach(button => {
  button.addEventListener('click', event => {
    // Find the row that contains the clicked button and remove it
    const row = event.target.parentNode.parentNode;
    row.remove();
  });
});


