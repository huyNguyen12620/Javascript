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

//   Cho 3 số nguyên . Viết chương trình xuất ra có bao nhiêu số chẵn và bao nhiêu số lẻ

document.getElementById('btnTinh').onclick = function () {
     var soThu1 = Number(document.getElementById('soThu1').value);
    var soThu2 = Number(document.getElementById('soThu2').value);
    var soThu3 = Number(document.getElementById('soThu3').value);

    var soChan = 0;
    var soLe = 0;

    if(soThu1 % 2===0){
        soChan += 1;
    }else{
        soLe +=1;
    }

    if(soThu2 % 2 ===0){
        soChan +=1;
    }else {
        soLe+=1
    }

    if(soThu3 % 2===0){
        soChan+=1;
    }else{
        soLe +=1;
    }
    
    document.getElementById('ketQua3').innerHTML = 'Có '+ soChan + ' số chẵn' + ' Và ' + soLe + ' số lẻ';
}

document.getElementById('xuatTamGiac').onclick = function(){
    var canh1 = Number(document.getElementById('canh1').value);
    var canh2 = Number(document.getElementById('canh2').value);
    var canh3 = Number(document.getElementById('canh3').value);

    var ketQua = '';

    if(canh1 === canh2 && canh1 === canh3 && canh1 === canh3){
        ketQua ='Tam giác đều';
    }else if(canh1 === canh2 || canh2 === canh3 || canh1 === canh3){
        ketQua ='Tam giác cân';
    }else if(canh1*canh1 + canh2*canh2 == canh3*canh3 || canh2*canh2 + canh3*canh3 == canh1* canh1|| canh3*canh3 == canh1*canh1 + canh2 *canh2){
        ketQua ='Tam giác vuông';
    }else{
        ketQua = 'Tam giác nào đó'
    }
document.getElementById('ketQua4').innerHTML = ketQua;

}