var data = [];
function add() {
    
    var item_id = document.getElementById("id").value;
    var item_name = document.getElementById("name").value;
    var item_age = document.getElementById("age").value;
  
    var item = {
        Id: item_id,
        Name: item_name,
        Age: item_age,
    }
    var index = data.findIndex((X) => X.Id = item.Id);
    if (index >= 0) {
        data.splice(index, 1, item)
    } else {
        data.push(item);
    }
    
    render();  
    clear();
}

function render() {
    table = `<tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Action</th>
        </tr>`
    for (i = 0; i<data.length; i++) {
        table +=
        `<tr>
        <td>${data[i].Id}</td>
        <td>${data[i].Name}</td>
        <td>${data[i].Age}</td>
        <td>
            <button id="btn" onclick="deleteItems(${data[i].Id})">Delete</button>
            <button id="btn" onclick="editItems(${data[i].Id})">Edit</button>
        </td>
        </tr>`
    }
    document.getElementById("render").innerHTML = table;

}

function clear() {
    document.getElementById("id").value ='';
    document.getElementById("name").value ='';
    document.getElementById("age").value ='';
}

function deleteItems(id) {
    if (confirm("Are you sure to want detele?")){
        for (i=0; i<data.length; i++) {
            if (data[i].Id == id) {
                data.splice(i, 1);
                render();
            }
        }
    }else{   
    }
}

function editItems(id) {
    for(i=0; i<data.length; i++){
        if (data[i].Id == id) {
            document.getElementById('id').value = data[i].Id;
            document.getElementById('name').value = data[i].Name;
            document.getElementById('age').value = data[i].Age;
        }
    }
}
