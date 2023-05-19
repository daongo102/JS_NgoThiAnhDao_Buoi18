//! BÀI TẬP 6 - ĐỔI CHỖ 2 GIÁ TRỊ


function changeViTri() {
    var numberListCopy = [];
    
    for (var i = 0; i < numberList.length; i++) {
        numberListCopy.push(numberList[i]);        
    }

    var viTr1 = Number(document.querySelector("#viTri1").value);
    var viTr2 = Number(document.querySelector("#viTri2").value);
    hoanVT(numberListCopy, viTr1, viTr2);

    document.querySelector("#txt6DoiViTri").innerHTML = "Mảng sau khi đổi: " + numberListCopy;    
}

document.querySelector("#btn6DoiViTri").onclick = changeViTri;


function hoanVT(a, i1, i2) {
    var t;
    t = a[i1];
    a[i1] = a[i2];
    a[i2] = t;    
}



