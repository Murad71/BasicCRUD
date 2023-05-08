const table = document.getElementsByClassName("tbody1")[0];
let removeListItems= document.getElementsByClassName('reject');
let editListItems= document.getElementsByClassName('edit');
let storage=JSON.parse(localStorage.getItem('store')) || [];
let del= document.getElementById("leave");

console.log(del);

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
                    <td><a class="edit">Edit</a> <input type='button' value= 'Reject' name=${obj.id} class="reject"/></td>`;
                    
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
        let confirmation= confirm("Are you sure you want to modify the entry?");
        if(confirmation)
        {
            let buttonClicked = event.target;
            let row = buttonClicked.closest('tr');

            let name = row.cells[0].textContent;
            let startDate = row.cells[1].textContent;
            let days = row.cells[2].textContent;
            let leaveType = row.cells[3].textContent;
            //let photo = row.cells[4].querySelector('photo').src;
            
            
            // document.getElementById("name").value = name;
            // document.getElementById("startdate").value = startDate;
            // document.getElementById("days").value = days;
            // document.getElementById("leave").value = leaveType;
            // document.getElementById('photo').value = photo;


        }
        else return;
    })
}




