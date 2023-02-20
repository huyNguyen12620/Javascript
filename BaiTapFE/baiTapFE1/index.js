// Bài 1: tính tiền lương nhân viên

document.getElementById("btnTongLuong").onclick = function () {
  var luongMotNgay = 100000;
  var tongLuong = 0;
  var soNgayLam = document.getElementById("soNgayLam").value;

  tongLuong = soNgayLam * luongMotNgay;

  document.getElementById("tongLuong").innerHTML = tongLuong;
};

// Bài 2: Tính giá trị trung bình 5 số
document.getElementById('btnTinhTrungBinh').onclick = function(){
 var so1 = Number(document.getElementById('so1').value);
var so2 = Number(document.getElementById('so2').value);
var so3 = Number(document.getElementById('so3').value);
var so4 = Number(document.getElementById('so4').value);
var so5 = Number(document.getElementById('so5').value);

var tongTrungBinh = (so1 + so2 + so3 + so4 +so5)/5;

document.getElementById('trungBinh').innerHTML = tongTrungBinh;
}

// Bài 3: Quy đổi tiền

document.getElementById('btnQuyDoi').onclick = function(){
    var soVND = 23500;
    var soUSD = Number(document.getElementById('soUSD').value);

    var tienQuyDoi = soUSD * soVND;

    document.getElementById('tienQuyDoi').innerHTML = tienQuyDoi + 'VNĐ';
}


// Bài 4: Tính diện tích, chu vi hình chữ nhật
    document.getElementById('tinhChuVi').onclick = function(){
        var CD = Number(document.getElementById('chieuDai').value);
        var CR = Number(document.getElementById('chieuRong').value);
        var chuVi = (CD + CR)*2;

        document.getElementById('kqChuVi').innerHTML = 'Chu vi HCN là:' + chuVi;
    }

    document.getElementById('tinhDienTich').onclick = function(){
        var CD = Number(document.getElementById('chieuDai').value);
        var CR = Number(document.getElementById('chieuRong').value);
        var dienTich = CD * CR;

        document.getElementById('kqChuVi').innerHTML = 'Diện tích HCN là:' + dienTich;
    }

    // Bài 5: Tính tổng 2 ký số

    document.getElementById('btnTinhTong').onclick = function(){
       var soN = Number(document.getElementById('soN').value);
       
       var soDV = soN % 10;
       var soHC = soN /10;

       var ketQua = soDV + soHC;

       document.getElementById('ketQua').innerHTML = Math.floor(ketQua);


    }

    