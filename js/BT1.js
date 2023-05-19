//! BÀI TẬP 1 - TÍNH TỔNG CÁC SỐ DƯƠNG

function calcTongSoDuong() {
    var result = 0;

    for (var i = 0; i < numberList.length; i++) {
        if (numberList[i] > 0) {
            result += numberList[i];
        }
        console.log(numberList)
    }
    
    document.querySelector("#txt1TinhTong").innerHTML = "Tổng các số dương: " + result.toLocaleString();
}

document.querySelector("#btn1TinhTong").onclick = calcTongSoDuong;