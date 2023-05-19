//! BÀI TẬP 8 - TÌM SỐ NGUYÊN TỐ

function findSoNguyenTo() {
    var ketQua = "";
    var soNguyen = [];
    for (var i = 0; i < numberList.length; i++) {
        if (Number.isInteger(numberList[i])) {
            soNguyen.push(numberList[i]);
        }
    }

    var soNguyenDuong = [];
    for (var i = 0; i < soNguyen.length; i++) {
        if (soNguyen[i] > 0) {
            soNguyenDuong.push(soNguyen[i]);
        }
    }

    for (var i = 0; i < soNguyenDuong.length; i++) {
        if (soNguyenDuong.length == 0) {
            ketQua = "-1";
        } else {
            var checkSoNT = checkSoNguyenTo(soNguyenDuong[i]);
            if (checkSoNT == true) {
                ketQua = soNguyenDuong[i];
                break;
            } else {
                ketQua = "-1";
            }
        }        
    }
    document.querySelector("#txt8TimSoNT").innerHTML = ketQua;
}

document.querySelector("#btn8TimSoNT").onclick = findSoNguyenTo;


function checkSoNguyenTo(number) {
    var checkSNT = true;

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            checkSNT = false;
            break;
        }
    }
    return checkSNT;
}