function update(){
    console.log("Updating list...");
    tit=document.getElementById('title').value;
    disc=document.getElementById('discription').value;
    let itemJsonArray=[];
    let itemJsonStr="";
    if(localStorage.getItem('itemsJson')==null){
       itemJsonArray=[];
        itemJsonArray.push(tit,disc);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonStr=localStorage.getItem('itemJsonArray')
        itemJsonArray=JSON.parse(itemJsonArray)
        itemJsonArray.push([tit,disc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))

    }

    // populate table
    tableBody=document.getElementById("tablebody");
    let Str="";
    itemJsonArray.array.forEach(element,index) => {
        <tr>
                                <th scope="col">${index+1}</th>
                                <th scope="col">${element[0]}</th>
                                <th scope="col">${element[1]}</th>
                                <td><button class="btn btn-sm btn-primary">Delete</button></td>

                            </tr>
    });
    tableBody.innerHTML=str;
})

add=document.getElementById("add");
add.addEventListener("click",()=>{
   