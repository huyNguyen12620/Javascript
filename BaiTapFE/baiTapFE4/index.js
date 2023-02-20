document.getElementById('btnXuatSo').onclick = function () {
    var so1 = Number(document.getElementById('so1').value);
    var so2 = Number(document.getElementById('so2').value);
    var so3 = Number(document.getElementById('so3').value);


    var ketQua = 0;

    if(so1 < so2 && so1 < so3 && so2 < so3){
        ketQua = so1 + '->' + so2 + '->' + so3
    } else if( so2 < so1 && so2 < so3 && so1 < so3){
            ketQua = so2 + '->' + so1 + '->' + so3
    }else if(so3 < so1 && so3 < so2 && so2 < so1){
        ketQua = so3 + '->' + so2 + '->' + so1;
    }else{
        ketQua = 'Số không hợp lệ'
    }


    document.getElementById('ketQua1').innerHTML = ketQua;
}

document.getElementById("btnChaoHoi").onclick = function () {
    // input: chọn thành viên ba, mẹ, anh trai, em gái : string
    
    var name = document.getElementById('nameFami').value;
    console.log(name)
     var getName = '';
      //progress
      if(name === 'B'){
          getName = 'Xin chào bố!';
      }else if(name === 'M'){
          getName = 'Xin chào mẹ!';
      }else if (name === 'A'){
          getName = 'Xin chào anh trai!';
      }else if(name === 'E'){
          getName = 'Xin chào em gái!!'
      }else{
          getName = 'Xin chào người lạ!'
      }
  
  
   //output: Lời chào :string
    document.getElementById('ketQua2').innerHTML = getName;
  };