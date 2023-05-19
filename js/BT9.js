//! BÀI TẬP 9 - ĐẾM SỐ NGUYÊN

var listNumber9 = [];

function listThemSo(){
    var themSo = Number(document.querySelector("#nhapSoBT9").value);

    listNumber9.push(themSo);    

    document.querySelector("#txt9ThemSo").innerHTML = listNumber9;
}  

document.querySelector("#btn9ThemSo").onclick = listThemSo;


function countSoNguyen(){
    var count = 0;

    for (var i = 0; i < listNumber9.length; i++) {
       if(Number.isInteger(listNumber9[i])){
            count += 1;
       }        
    }
    
    document.querySelector("#txt9DemSoNguyen").innerHTML = "Số nguyên: " + count;
}

document.querySelector("#btn9DemSoNguyen").onclick = countSoNguyen;