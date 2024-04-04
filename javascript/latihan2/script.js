let data = ["Alfredo","dafit","Felix"]
let listmhs = document.getElementById("listmhs")

data.forEach(showMahasiswa);

function showMahasiswa(velue, index){
    console.log(velue);
    listmhs.innerHTML += "<li>" + velue + "</li>";
}


let npm = document.getElementById("npm");
// tampilkan data localstorage ke dalam elemen < id='npm'>
npm.innerHTML = localStorage.getItem("npm");

let nama = document.getElementById("nama");
nama.innerHTML = localStorage.getItem("nama");

// simpan data ke localstorage
// cara menyimpan data 
localStorage.setItem("email","ahmad@test.com");             


// menyimpan data ke dalam array
let hobi =["baca","game","code"];
// cara 1
localStorage.setItem("hobi",hobi);
// cara 2
localStorage.setItem("myhobi",JSON.stringify(hobi));

// data dalam bentuk objek yang biasanya diawalin dengan kurawal
let mhs = { npm: 2226240002,nama:"Andri"};
// cara akses data 
console.log(mhs.npm);
console.log(mhs.nama);

// kombinasi array dan object
let nilai = [
    {"kode_mk" : "SI0001", "nama_mk" : "pemograman web"},
    {"kode_mk" : "SI0002", "nama_mk" : "PAB"}
];

// tampilkan nama_mk pemograman web umtuk satu satu
console.log(nilai[0].nama_mk);
console.log(nilai[1].nama_mk);


// simpan ke dalam lokanstorage
localStorage.setItem("nilai",JSON.stringify(nilai));
// tampilkan menggunkan for atau foreach
let lsNilai = JSON.parse(localStorage.getItem("nilai"));


for (const [index, data] of lsNilai.entries()){
    console.log(data.kode_mk);
    console.log(data.nama_mk);
    // tampikan data mk ke dalam < id ="listmk">
    document.getElementById("listmk").innerHTML += `<li>${data.kode_mk} ${data.nama_mk}</li>`;
}