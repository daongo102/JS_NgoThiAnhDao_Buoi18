//! BÀI TẬP 7 - SẮP XẾP THEO THỨ TỰ TĂNG DẦN

function sapXepTang(){
    var numberListCopy = [];
    
    for (var i = 0; i < numberList.length; i++) {
        numberListCopy.push(numberList[i]);        
    }

    var result = numberListCopy.sort(function (a, b) {
        return a - b;
    })

    document.querySelector("#txt7SapXepTang").innerHTML = "Mảng sau khi sắp xếp: " + result;
}

document.querySelector("#btn7SapXepTang").onclick = sapXepTang;

