//! NHẬP VÀO CÁC SỐ NGUYÊN

var numberList = [];

function addNumber() {
    
    var nhapSo = Number(document.querySelector("#nhapSoINP").value);       

    numberList.push(nhapSo);    

    document.querySelector("#txtNhapSo").innerHTML = numberList;
}

document.querySelector("#btnThemSo").onclick = addNumber;