let storage=JSON.parse(localStorage.getItem('store')) || [];
let index=JSON.parse(localStorage.getItem('rIndex')) || null;
const submitButtonCatch=document.getElementById("submitButton");

//after clicking the submit button
submitButtonCatch.addEventListener("click",() =>{
    const form=document.getElementById("form1");
    let object={};
    let flag=true;
   
    object["id"]= Date.now(); 
    for(let i=0;i<form.length;i++)
    {
        object[form.elements[i].name]=form.elements[i].value;
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
        if(index!=null) 
        {
            storage[index]=object;
            index=null;
        }
        else storage.push(object);
        
        
        localStorage.setItem('store',JSON.stringify(storage));
        localStorage.setItem('rIndex',JSON.stringify(index));
        form.reset();
    }
});



const fileEl= document.getElementById('photo');
fileEl.addEventListener('change', () =>{

    const fr= new FileReader();
    fr.readAsDataURL(fileEl.files[0]);

    fr.addEventListener('load', ()=>{
        const url= fr.result;
        console.log(url);
    });

});


console.log(storage);



// let submitButtonClicked=document.getElementById("submitButton");
// let indx=0;
// let flag= true;
// let obj={};

// submitButtonClicked.addEventListener('click',() =>{
    
//     const form= document.getElementById('form1');
//     obj["id"]= indx;
//     indx++;
//     for(let i=0; i<form.length; i++)
//     {
//         obj[form.elements[i].name]=form.elements[i].value;
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
//         alert("Data entered successfully!");
//         insertData();
//     }

// });


// function intertData()
// {
//     const table = document.getElementsByClassName("tbody1")[0];
//           var row=document.createElement('tr');
//            row.innerHTML = `<td>${obj.name}</td>
//                 <td>${obj.startdate}</td>
//                 <td>${obj.days}</td>
//                 <td>${obj.leaves}</td>
//                 <td><img id="img" src=${obj.photo} alt=""></td>
//                 <td><a href="index.html" id="edit">Edit</a> <input type='button' value= 'Reject' name=${obj.id} id="reject"/></td>`;
//             table.appendChild(row);
// }
    
        