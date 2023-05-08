let table=document.querySelector(".table1 .tbody1");
let storage=JSON.parse(localStorage.getItem('store')) || [];


//displaying the data
storage.forEach(obj => {
    let row=document.createElement('tr');
    row.innerHTML = `<td>${obj.name}</td>
                    <td>${obj.startdate}</td>
                    <td>${obj.days}</td>
                    <td>${obj.leaves}</td>
                    <td><img id="img" src=${obj.photo} alt=""></td>
                    <td><a href="index.html" class="edit">Edit</a><input type='button' value= 'Reject' name=${obj.id} class="reject"/></td>`;
    table.appendChild(row);
    
    // //EDIT BUTTON
    const editButton=row.querySelector("#edit");
    editButton.addEventListener('click',(event)=>{
        let rowIndex= event.target.parentElement.parentElement.rowIndex;
        localStorage.setItem('rIndex',JSON.stringify(rowIndex));
    })

    //REJECT BUTTON
    const rejectButton=row.querySelector("#reject");
    rejectButton.addEventListener('click',(event)=>{
        let signal=confirm("Are you sure?");
        if(!signal) return;
        const rowIndex=event.target.parentElement.parentElement.rowIndex;
        event.target.parentElement.parentElement.remove();
        storage.splice(rowIndex-1,1);
        localStorage.setItem('store',JSON.stringify(storage));
        console.log(storage);
    })
});




//SEARCHING AND SHOWING THE DATA
function searching()
{
    let filter=document.getElementById("khojo").value.toUpperCase();
    let tr=table.getElementsByTagName("tr");
    for(let i=0;i<tr.length;i++)
    {
        let tableCell=tr[i].getElementsByTagName("td")[0];
        if(tableCell)
        {
            let text=tableCell.innerHTML;
            if(text.toUpperCase().indexOf(filter)>-1) tr[i].style.display="";
            else tr[i].style.display="none";
        }
    }
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