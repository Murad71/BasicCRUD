const table = document.getElementsByClassName("tbody1")[0];
let removeListItems= document.getElementsByClassName('reject');
let editListItems= document.getElementsByClassName('edit');
let storage=JSON.parse(localStorage.getItem('store')) || [];

//console.log(removeListItems);
//console.log(storage[3].id);

//displaying the data
storage.forEach(obj =>{
    let row=document.createElement('tr');
    row.innerHTML = `<td>${obj.name}</td>
                    <td>${obj.startdate}</td>
                    <td>${obj.days}</td>
                    <td>${obj.leaves}</td>
                    <td><img id="img" src=${obj.photo} alt="loading.."></td>
                    <td><a href="index.html" class="edit">Edit</a> <input type='button' value= 'Reject' name=${obj.id} class="reject"/></td>`;
                    
    table.appendChild(row);
});

//rejecting the entry
for(let i=0; i < removeListItems.length; i++)
{
    let button= removeListItems[i];
    button.addEventListener('click', function(event){
        //button we clicked on
        let alert= confirm("Are you sure you want to reject the request?");
        if(alert)
        {
            let buttonClicked= event.target;
            let row= buttonClicked.closest('tr');
            let rowIndex= row.rowIndex;
            storage.splice(rowIndex - 1, 1);
            localStorage.setItem('store', JSON.stringify(storage));
            buttonClicked.parentElement.parentElement.remove();
        }
        else return; 
    })
}

//editing the entry
for(let i=0; i<editListItems.length; i++)
{
    let button= editListItems[i];
    button.addEventListener('click', function(event){
        let alert= confirm("Are you sure you want to modify the entry?");
        if(alert)
        {
            let buttonClicked = event.target;
            let row = buttonClicked.closest('tr');

            let cells = row.querySelectorAll('td');
            let name = cells[0].textContent;
            let startDate = cells[1].textContent;
            let days = cells[2].textContent;
            let leaves = cells[3].textContent;
            let photo = cells[4].querySelector('img').src;
           
            cells[0].innerHTML = `<input type="text" value="${name}">`;
            cells[1].innerHTML = `<input type="date" value="${startDate}">`;
            cells[2].innerHTML = `<input type="number" value="${days}">`;
            cells[3].innerHTML = `<input type="number" value="${leaves}">`;
            cells[4].innerHTML = `<input type="text" value="${photo}">`;

        }
        else return;
    })
}




