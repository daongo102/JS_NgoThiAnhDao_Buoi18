//! BÀI TẬP 10 - SO SÁNH SỐ LƯỢNG SỐ ÂM VÀ SỐ DƯƠNG

function compareAmDuong() {
    var countDuong = 0;
    for (var i = 0; i < numberList.length; i++) {
        if (numberList[i] > 0) {
            countDuong += 1;
        }
    }

    var countAm = 0;
    for (var i = 0; i < numberList.length; i++) {
        if (numberList[i] < 0) {
            countAm += 1;
        }
    }

    var result = "";
    if (countAm == countDuong) {
        result = "Số âm = Số dương";
    } else if (countAm > countDuong) {
        result = "Số âm > Số dương";
    } else {
        result = "Số âm < Số dương";
    }

    document.querySelector("#txt10SoSanh").innerHTML = result;
}

document.querySelector("#btn10SoSanh").onclick = compareAmDuong;

