//! BÀI TẬP 2 - ĐẾM CÁC SỐ DƯƠNG

function countSoDuong(){
    var count = 0;

    for (var i = 0; i < numberList.length; i++) {
        if(numberList[i]>0){
            count += 1;
        }        
    }
    
    document.querySelector("#txt2DemSo").innerHTML = "Có " + count + " số dương";
}

document.querySelector("#btn2DemSo").onclick = countSoDuong;