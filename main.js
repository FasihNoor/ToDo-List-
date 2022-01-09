let tasks = document.getElementById("tasks"); //DIV Block that will house the tasks 
let input = document.getElementById("input_task"); //This is what the input will be 
let button = document.getElementById("button"); // The button 

button.addEventListener('click', function(){

    var checkmark =document.createElement('input');
    checkmark.id = "flexCheckIndeterminate"
    checkmark.type= "checkbox"
    checkmark.classList.add("form-check-input");

    var paragraph = document.createElement('p');
    paragraph.innerText = input.value;
    paragraph.id = "para"

    paragraph.appendChild(checkmark); 
    
    tasks.appendChild(paragraph); 


    input.value = " ";

    
    
    paragraph.addEventListener("mouseover", function(){
        paragraph.style.textDecoration = 'line-through'; // Adds a line through it when the mouse is over
    });
    
    paragraph.addEventListener("mouseout", function(){  // Removes the line when the mouse is off
        paragraph.style.textDecoration = 'none';
    });


    paragraph.addEventListener("click", function(){  
        tasks.removeChild(paragraph);
    });
   

    
    

 } ); 




