// Khai báo prototype sinh viên, kiểu dữ liệu object SinhVien
function SinhVien(){ //this. đại diện cho function
    this.maSinhVien = '';
    this.tenSinhVien ='';
    this.loaiSinhVien ='';
    this.diemToan = 0;
    this.diemVan =0;
    this.tinhDiemTrungBinh=function(){
        var output = 0;
        output = (Number(this.diemToan) + Number(this.diemVan))/2;
        // output = (dToan + dVan)/2
        return output;
    };
    this.xepLoai= function(){
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

// Khai báo đối tượng từ prototype dùng từ khóa new
var sinhVien1 = new SinhVien(); //instance - object - đối tượng: thể hiện từ prototype
sinhVien1.tenSinhVien = 'ABC';
sinhVien1.diemToan =5;
sinhVien1.diemVan=10;
// sinhVien1.__proto__.tinhDiemTrungBinh = function(){

// }
console.log('sv1',sinhVien1.tinhDiemTrungBinh());

console.log(sinhVien1);

var sinhVien2 = new SinhVien();
sinhVien2.tenSinhVien ='XYZ';
sinhVien2.diemToan =8;
sinhVien2.diemVan=7;
console.log('sv2',sinhVien2.tinhDiemTrungBinh());

console.log(sinhVien2);