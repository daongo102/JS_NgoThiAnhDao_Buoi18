//! BÀI TẬP 5 - TÌM SỐ CHẴN CUỐI CÙNG

function findSoChan() {
    var soChan = [];
    
    for (var i = 0; i < numberList.length; i++) {
        if (numberList[i] % 2 == 0) {
            soChan.push(numberList[i]);
        }
    }

    var soChanCC = "";
    if(soChan.length == 0){
        soChanCC = "-1";
    }else{
        soChanCC = "Số chẵn cuối cùng: " + soChan[soChan.length-1];        
    }

    document.querySelector("#txt5TimSoChan").innerHTML = soChanCC;

}

document.querySelector("#btn5TimSoChan").onclick = findSoChan;