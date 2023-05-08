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



  <tr>
            <td>Sakib</td>
            <td>16-08-2020</td>
            <td>1</td>
            <td>Sick leave</td>
            <td><img src="sakib.jpg" alt="Sakib's photo" /></td>
            <td>
              <a href="#" class="edit">Edit</a>
              <a href="#" class="reject">Reject</a>
            </td>
          </tr>

});

const leaveRequest2 = JSON.parse(localStorage.getItem('leaveRequest'));