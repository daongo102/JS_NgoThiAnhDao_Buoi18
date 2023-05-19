//! BÀI TẬP 3 - TÌM SỐ NHỎ NHẤT

function findMin(){
    var min = numberList[0];  
     
    for (var i = 1; i < numberList.length; i++) {
        if(min > numberList[i]){
            min = numberList[i];        
        }        
    }

    document.querySelector("#txt3SoNN").innerHTML = "Số nhỏ nhất: " +  min;
}

document.querySelector("#btn3SoNN").onclick = findMin;