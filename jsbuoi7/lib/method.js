 // Bài toán kiểm tra số nguyên tố
 function kiemTraSoNT(iSo){ //input: 7
    var output = true; //output
    for(var uoc =2;uoc <= Math.sqrt(iSo);uoc++){
        if(iSo % uoc ==0){
            output = false;
            break;
        }

    }
    return output; //true | false
}