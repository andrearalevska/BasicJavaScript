let dynamictable= document.getElementById("dynamictable");
let tablebody= document.getElementById("tablebody");

let rownumber= parseInt(prompt("Enter the number of rows for your table:"));
let columnnumber= parseInt(prompt("Enter the number of columns for your table:"));

function createTable (rows, columns){
    for(n=1; n<=rows; n++){
        let row= document.createElement("tr");
        for(i=1; i<=columns; i++){
            let column= document.createElement("td")
            let insidecolumn= document.createTextNode(`Row No. ${n}, Column No. ${i}`)

            column.appendChild(insidecolumn);
            row.appendChild(column);
            tablebody.appendChild(row);
            dynamictable.appendChild(tablebody);
            
            dynamictable.style.backgroundColor="pink";
        }
    }
}

createTable(rownumber, columnnumber);
