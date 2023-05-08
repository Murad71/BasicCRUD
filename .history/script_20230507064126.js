let storage=JSON.parse(localStorage.getItem('store')) || [];
let index=JSON.parse(localStorage.getItem('rIndex')) || null;
const submitButtonCatch=document.getElementById("submitButton");
const img= new Image();


flatpickr("#startdate", {
    dateFormat: "d.m.Y",
    minDate: "today"
});

//after clicking the submit button
submitButtonCatch.addEventListener("click",() =>{
    const form=document.getElementById("form1");
    let object={};
    let flag=true;
   
    object["id"]= Date.now(); 
    for(let i=0;i<form.length;i++)
    {
        if(form.elements[i].name=="photo")
        {
            object[form.elements[i].name]= img.src;
        }
        else
        {
            object[form.elements[i].name]=form.elements[i].value;
        } 
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


//base64 conversion
const fileEl= document.getElementById('photo');
fileEl.addEventListener('change', () =>{

    const fr= new FileReader();
    fr.readAsDataURL(fileEl.files[0]);

    fr.addEventListener('load', ()=>{
        
        const url= fr.result;
        img.src= url;

    });

});


// console.log(storage);



