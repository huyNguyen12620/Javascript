{// Thông tin học viên
// var hoTen = 'Nguyễn Văn Tèo';
// var soDienThoai = '09090909';
// var email ='nguyenvanteo@gmail.com'
// var baiTap1 = 5;
// var baiTap2 =10;
// var baiTap3 =0;

//var tenKhoaHoc = 'Frontend'
//var ngayKhaiGiang ='10/06/2022';

// function tinhDiemTrungBinh(d1,d2,d3){
    
// var dtb =0;
// dtb =(d1 + d2 +d3) /3;

//     return dtb;
// }

/**------------------Lập trình hướng đối tượng OOP---------- */
// Khai báo biến đối tượng
/*
    Tính chất hướng đối tượng:
    + Tường minh về mặt ngữ nghĩa (đưa biến và hàm về đúng vị trí của nó)
    + Tính đóng gói: Biến của đối tượng nào thì phải thông qua đối tượng đó mới truy xuất được
*/

var hocVien = {
    hoTen : 'Nguyễn Văn Tèo',
    soDienThoai: '0909090909',
    email:'nguyenvanteo@gmail.com',
    baiTap1: 5,
    baiTap2: 10,
    baiTap3:0,
    tinhDiemTrungBinh: function(){ //this đại diện cho object chứ function đó
        // output: dtb:number
        var dtb =0;
       dtb= (this.baiTap1 + this.baiTap2 + this.baiTap3)/3;
        return dtb
    }
}

var giangVien = {
    hoTen: 'Nguyễn Văn Sang',
    soDienThoai: '08080808',
    hienThiThongTin : function(){
        console.log('Họ tên: ', this.hoTen);
        console.log('Số điện thoại: ', this.soDienThoai);
      

    }
}

console.log(hocVien);

// Truy xuất đến biến trong đối tượng (thuộc tính): object.key hoặc object['key']
console.log(hocVien.hoTen);
console.log('Số điện thoại',hocVien['soDienThoai']);


console.log('Giảng viên: ', giangVien.hoTen);
console.log('Giảng viên: ', giangVien['soDienThoai']);

// Truy xuất đến hàm trong đối tượng (phương thức): object.key() hoặc object['key]();
giangVien.hienThiThongTin();
giangVien['hienThiThongTin']();

}


// Bài tập quản lý sinh viên:

/*
    Yêu cầu: Xây dựng chức năng cho người dùng nhập liệu thông tin và in ra giao diện (in thông tin: Tính điểm trung bình, xếp loại)
*/

window.onload = function(){
    //Cửa sổ window bật lên thì hàm này sẽ kích hoạt ( được gọi )
    //B1: Khai báo đối tượng chứa thông tin từ giao diện
    var sinhVien ={
        maSinhVien :'',
        tenSinhVien:'',
        loaiSinhVien:'',
        diemToan:0,
        diemVan:0,
        tinhDiemTrungBinh:function(dToan,dVan){
            var output = 0;
            output = (this.diemToan +this.diemVan)/2;
            // output = (dToan + dVan)/2
            return output;
        },
        xepLoai: function(){
            // input: Điểm trung bình: number (điểm >= 5 đậu, < rớt)
            var diemTrungBinh = this.tinhDiemTrungBinh();
            // output: loaiSinhVien: string
            var loaiSinhVien ='';
            if(diemTrungBinh >= 5){
                loaiSinhVien ='Đậu';
            }else{
                loaiSinhVien='Rớt';
            }
            return loaiSinhVien;
        }

    }
    document.querySelector('#btnXuatThongTin').onclick = function(){
        // Xác định input: thông tin học viên
        sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
        sinhVien.tenSinhVien = document.querySelector('#tenSinhVien').value;
        sinhVien.loaiSinhVien  = document.querySelector('#loaiSinhVien').value;
        sinhVien.diemToan = Number(document.querySelector('#diemToan').value);
        sinhVien.diemVan = Number(document.querySelector('#diemVan').value);
        // Kiểm tra
        console.log('sinhVien',sinhVien)
        document.querySelector('#txtTenSinhVien').innerHTML =sinhVien.tenSinhVien;
    document.querySelector('#txtMaSinhVien').innerHTML =sinhVien.maSinhVien;
    document.querySelector('#txtLoaiSinhVien').innerHTML =sinhVien.loaiSinhVien;

    // var diemTrungBinh = sinhVien.tinhDiemTrungBinh(sinhVien.diemToan,sinhVien.diemVan);
    var diemTrungBinh = sinhVien.tinhDiemTrungBinh();
    document.querySelector('#txtDiemTrungBinh').innerHTML = diemTrungBinh;
    var loaiSV = sinhVien.xepLoai()
    document.querySelector('#txtXepLoai').innerHTML = loaiSV;
    }
    
   

}