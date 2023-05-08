var submitButtonClicked= document.getElementById('submitButton');
var table = document.getElementsByClassName("tbody1")[0];
var indx=0;

submitButtonClicked.addEventListener('click', function(event){
    
    const form= document.getElementById('form1');
    let obj={};
    let flag= true;

    obj["id"]= indx;
    indx++;
    for(let i=0; i<form.length; i++)
    {
        obj[form.elements[i].name]=form.elements[i].value;
        if(form.elements[i].value=='') 
        {
            flag=false;
            alert("WARNING: Fill all the given Input correctly.");
            break;
        }
        if(form.elements[i].name=="days" && (form.elements[i].value>7 || form.elements[i].value<1)) 
        {
            flag=false;
            alert("WARNING: Enter a valid number for vacation");
            break;
        }
    }
    if(flag) 
    {
        alert("Your data has been submitted Successfully!!");
            let row=document.createElement('tr');
            row.innerHTML = `<td>${obj.name}</td>
                    <td>${obj.startdate}</td>
                    <td>${obj.days}</td>
                    <td>${obj.leaves}</td>`;
                    table.appendChild(row);
    }
});





// let storage=JSON.parse(localStorage.getItem('store')) || [];
// let index=JSON.parse(localStorage.getItem('rIndex')) || null;
// const submitButtonCatch=document.getElementById("submitButton");
// let indx=0;

// //after clicking the submit button
// submitButtonCatch.addEventListener("click",() =>{
//     const form=document.getElementById("form1");
//     let object={};
//     let flag=true;
   
//     object["id"]= indx;
//     indx++; 
//     for(let i=0;i<form.length;i++)
//     {
//         object[form.elements[i].name]=form.elements[i].value;
//         if(form.elements[i].value=='') 
//         {
//             flag=false;
//             alert("WARNING: Fill all the given Input correctly.");
//             break;
//         }
//         if(form.elements[i].name=="days" && (form.elements[i].value>7 || form.elements[i].value<1)) 
//         {
//             flag=false;
//             alert("WARNING: Enter a valid number for vacation");
//             break;
//         }
//     }

//     if(flag) 
//     {
//         alert("Your data has been submitted Successfully!!");
//         if(index!=null) 
//         {
//             storage[index]=object;
//             index=null;
//         }
//         else storage.push(object);
//         localStorage.setItem('store',JSON.stringify(storage));
//         localStorage.setItem('rIndex',JSON.stringify(index));
//         form.reset();
//         console.log(storage);
//     }
// });