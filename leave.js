const table = document.getElementsByClassName("tbody1")[0];
var removeListItems= document.getElementsByClassName('reject');
var storage=JSON.parse(localStorage.getItem('store')) || [];

//console.log(removeListItems);
//console.log(storage[3].id);

//displaying the data
storage.forEach(obj =>{
    let row=document.createElement('tr');
    row.innerHTML = `<td>${obj.name}</td>
                    <td>${obj.startdate}</td>
                    <td>${obj.days}</td>
                    <td>${obj.leaves}</td>
                    <td><img id="img" src=${obj.photo} alt=""></td>
                    <td><a href="index.html" id="edit">Edit</a> <input type='button' value= 'Reject' name=${obj.id} class="reject"/></td>`;
                    
    table.appendChild(row);
});

//rejecting the entry
for(var i=0; i < removeListItems.length; i++)
{
    var button= removeListItems[i];
    button.addEventListener('click', function(event){
        //button we clicked on
        var buttonClicked= event.target;
        var row= buttonClicked.closest('tr');
        var rowIndex= row.rowIndex;
        storage.splice(rowIndex - 1, 1);
        localStorage.setItem('store', JSON.stringify(storage));
        buttonClicked.parentElement.parentElement.remove();
    })
}


///REFRESHING rIndex by clicking HOME button
const homeButton=document.getElementsByClassName('home')[0];
homeButton.addEventListener('click',()=>{
    localStorage.setItem('rIndex',JSON.stringify(''));
})



///REFRESHING rIndex by clicking HOME button
const submitLeave=document.getElementById("button1");
submitLeave.addEventListener('click',()=>{
    localStorage.setItem('rIndex',JSON.stringify(''));
})

