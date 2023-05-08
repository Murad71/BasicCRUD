let storage=JSON.parse(localStorage.getItem('store')) || [];
let index=JSON.parse(localStorage.getItem('rIndex')) || null;
const submitButtonCatch=document.getElementById("submitButton");


//after clicking the submit button
submitButtonCatch.addEventListener("click",() =>{
    const form=document.getElementById("form1");
    let object={};
    let flag=true;
   
    for(let i=0;i<form.length;i++)
    {
        object[form.elements[i].name]=form.elements[i].value;
        if(form.elements[i].value=='') 
        {
            flag=false;
            alert("WARNING: Fill all the given Input correctly.");
            break;
        }
        if(i==2 && (form.elements[i].value>7 || form.elements[i].value<1)) 
        {
            flag=false;
            alert("WARNING: Make leave-day range in between (1-7) days.");
            break;
        }
    }

    if(flag) 
    {
        alert("Your data submitted Successfully!!");
        if(index!=null) 
        {
            storage[index]=object;
            index=null;
        }
        else storage.push(object);
        localStorage.setItem('store',JSON.stringify(storage));
        localStorage.setItem('rIndex',JSON.stringify(index));
        form.reset();
        console.log(storage);
    }
});