let data = ["Alfredo","dafit","Felix"]
let listmhs = document.getElementById("listmhs")

data.forEach(showMahasiswa);

function showMahasiswa(velue, index){
    console.log(velue);
    listmhs.innerHTML += "<li>" + velue + "</li>";
}
