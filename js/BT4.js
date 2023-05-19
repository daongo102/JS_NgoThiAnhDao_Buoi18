//! BÀI TẬP 4 - TÌM SỐ DƯƠNG NHỎ NHẤT

function findSoDuongNN() { 
    var soDuong = [];   

    for (var i = 0; i < numberList.length; i++) {
        if (numberList[i] > 0) {
           soDuong.push(numberList[i]);
        }
    }


    if(soDuong.length == 0){
        alert("Không có số dương!")
    }else{
        var minDuong = soDuong[0];
        for (var i = 0; i < soDuong.length; i++) {
            if(minDuong > soDuong[i]){
                minDuong = soDuong[i];
            }            
        }    
    }

    document.querySelector("#txt4SoDuongNN").innerHTML = "Số dương nhỏ nhất: " + minDuong;        
}

document.querySelector("#btn4SoDuongNN").onclick = findSoDuongNN;
   