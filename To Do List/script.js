let tasks = [];
function addNewTask(){
let addText= document.createElement("div")
addText.style.border=`1px solid black`;
addText.style.width=`80%`;
addText.style.margin=`10px auto`;
addText.style.padding=`25px`;

addText.innerHTML=`<input type =text placeholder='Enter Task' id="txt1">
                   <button onclick="savetask()">Add</button>`
document.getElementById("dispalyList").appendChild(addText)

}

function savetask(){
    let txt= document.getElementById("txt1").value;
    if(txt.trim()!="")
    tasks.push(txt);
    document.getElementById("txt1").value="";
    displayList();
}

function displayList(){
   let table=  document.createElement("table")
   table.innerHTML=`<thead>
                    <tr>
                    <th> Sr. No </th>
                    <th> Task </th>
                    <th></th>
                    </tr>
                    </thead>
                    <tbody>
                     ${tasks.map((val, index) => 
                            `<tr>
                                <td>${index + 1}</td>
                                <td>${val}</td>
                                <td><a href="#" onclick="removeTask(${index})">Remove</a></td>
                            </tr>`
                        ).join("")}
                    </tbody> `  ;
     document.getElementById("dispalyList").innerHTML = ""; 
    document.getElementById("dispalyList").appendChild(table);

}

function removeTask(index) {
    tasks.splice(index, 1); 
    displayList(); 
}