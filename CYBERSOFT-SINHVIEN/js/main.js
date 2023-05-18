document.querySelector("#btnSVCaoDiemNhat").onclick = function () {
  // input: mangDiem: arrDiem[],arrTenSinhVien, arrTen
  var arrTagTdDiem = document.querySelectorAll("#tblBody td:nth-child(4)");
  // console.log(arrTagTdDiem);
  var arrDiem = [];
  for (var index = 0; index < arrTagTdDiem.length; index++) {
    // Mỗi lần duyệt qua thẻ td thì lấy ra innerHTML điểm
    var diem = arrTagTdDiem[index].innerHTML;
    // Thêm vào input arrDiem
    arrDiem.push(diem);
  }

//   Lấy input arrTen
  var arrTagTen = document.querySelectorAll("#tblBody td:nth-child(3)");
//   console.log(arrTagTen)
  var arrTen = [];
  for(var index = 0; index < arrTagTen.length;index++){
        var ten = arrTagTen[index].innerHTML;
        arrTen.push(ten)
  }
  console.log(arrTen);
  console.log(arrDiem);
    // output: nguyễn văn a - 9 điểm : output: string
    var output = '';
    // progress
    // var max = arrDiem[0]; //Đặt biến cờ, phần tử thứ 0 lớn nhất
    // var indexMax =0;
    // for(var index = 0; index < arrDiem.length;index++){
    //     if(arrDiem[index] > max){ //Nếu có phần tử nào lớn hơn max = max = phần tử đó 
    //         max = arrDiem[index];
    //         indexMax = index;
    //     }
    // }
    var indexMax = findIndexMax(arrDiem);
    output ='Sinh viên có điểm cao nhất: ' + arrTen[indexMax] + ' - ' + arrDiem[indexMax];
    // In dữ liệu output ra giao diện
    document.querySelector('#svGioiNhat').innerHTML = output;
};

// Tìm sinh viên có điểm thấp nhất
document.querySelector('#btnSVThapDiemNhat').onclick=function(){
    //input: mangDiem, arrDiem[], arrTenSinhVien, arrTen
    var arrTagTdDiem = document.querySelectorAll('#tblBody td:nth-child(4)');
    var arrDiem = [];
    for(var index = 0; index < arrTagTdDiem.length;index++){
       var diem = arrTagTdDiem[index].innerHTML;
        arrDiem.push(diem);
    }

    var arrTagTen = document.querySelectorAll('#tblBody td:nth-child(3)');
    var arrTen =[];
    for(var index =0; index < arrTagTen.length;index++){
        var ten = arrTagTen[index].innerHTML;
        arrTen.push(ten)
    }
    console.log(arrDiem)
    console.log(arrTen)

    var ketQua ='';
   var indexMin = findIndexMin(arrDiem);

   ketQua = 'Sinh viên có điểm thấp nhất ' + arrTen[indexMin] + ' - ' + arrDiem[indexMin];
    
   document.querySelector('#svYeuNhat').innerHTML = ketQua;

}

// Đếm số sinh viên giỏi
document.querySelector('#btnSoSVGioi').onclick = function () {
    var arrTagTdDiem = document.querySelectorAll('#tblBody td:nth-child(4)');
    var arrDiem = [];
    for(var i =0; i < arrTagTdDiem.length;i++){
        var diem = arrTagTdDiem[i].innerHTML;
    arrDiem.push(diem);

    }
//   output: soLuongSVGioi: number
var soLuongSVGioi = 0;
soLuongSVGioi = demSinhVienGioi(arrDiem,8);

// in output ra giao diện
document.querySelector('#soSVGioi').innerHTML = soLuongSVGioi;
}

// Đếm số sinh viên trên 5

document.querySelector('#btnSVDiemHon5').onclick= function(){
    var arrTagTdDiem = document.querySelectorAll('#tblBody td:nth-child(4)');
    var arrDiem = [];
    for(var i=0;i < arrTagTdDiem.length;i++){
        var diem = arrTagTdDiem[i].innerHTML;
        arrDiem.push(diem);
    }

    var arrTagTen = document.querySelectorAll('#tblBody td:nth-child(3)');
    var arrTen =[]
    for(var i=0;i <arrTagTen.length;i++){
        var ten = arrTagTen[i].innerHTML;
        arrTen.push(ten);
    }
    // console.log(arrTen)
    // console.log(arrDiem)
    
    // output: html Tên các sv trên 5: string
    var html = '';

    html = inDSSVTren5(arrDiem,arrTen);
    // in output ra giao diện;
    document.querySelector('#dsDiemHon5').innerHTML = html;
}

document.getElementById('btnSapXepTang').onclick = function(){
  var arrTagTdDiem = document.querySelectorAll('#tblBody td:nth-child(4)');
  var arrDiem = [];
  for(var i=0;i < arrTagTdDiem.length;i++){
      var diem = arrTagTdDiem[i].innerHTML;
      arrDiem.push(diem);
  }
  // output: arrDiemSapXep
  var arrDiemSapXep = [];
  arrDiemSapXep = sapXepTangDanSo(arrDiem);
  document.querySelector('#dtbTang').innerHTML =+ arrDiemSapXep
}
