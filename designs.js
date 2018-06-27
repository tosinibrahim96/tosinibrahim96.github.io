var height,width,color,form;

// When size is submitted by the user, call makeGrid()
form = document.getElementById('sizePicker');
height = document.getElementById('inputHeight');
width = document.getElementById('inputWeight');

form.addEventListener("submit",function(event){
    event.preventDefault();
    heightValue = height.value;
    widthValue = width.value;
    makeGrid(heightValue,widthValue);
    //     color = colorPicker.value;
    //     console.log(color);
    // });
     
    });


function makeGrid(inputHeight,inputWidth) {

        //get the current state of the table
        var entireTable = document.getElementById("pixelCanvas");
        //make sure table is clear before creating a new one
        while(entireTable.firstChild){
            entireTable.removeChild(entireTable.firstChild);            
        }
    
    // Your code goes here!
    for (let i = 1; i <= inputHeight; i++) {

        //create each row and assign 'id'
       var tableRow = document.createElement("tr");
       tableRow.setAttribute("id","row"+i);

       //add row to table
       entireTable.appendChild(tableRow)

       
        for (let j = 1; j <=inputWidth; j++){
            //create a column for the current row
            var tableData = document.createElement("td");
            var currentRow = document.getElementById("row"+i);

            //add column to current row
            currentRow.appendChild(tableData);
        }
    }
        

    $('td').click(function addColor() {
        color= $('#colorPicker').val();
        console.log("clicked");
        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else{
            $(this).attr('style' , 'background-color: ' + color);
        }
     });
    
}

    

    