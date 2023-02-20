var number1 = 5; // type: number
var number2 = 10;
var number3 = 5;
var number4 = '5'; // type: string

//true: đúng, false: sai
//Các toán tử (phép tính) so sánh
console.log(number1 == number2); //false
console.log(number1 > number2); //false
console.log(number1 < number2);//true
console.log(number1 != number2);//true
//>=: lớn hơn hoặc =
console.log(number1 >= number3);//true
console.log(number1 <= number3);//true
// ===: So sánh cả giá trị và kiểu dữ liệu (Lưu ý: Khi so sánh trong js thường sử === thay vì ==)
console.log(number1 === number4);//true; 
console.log(number1 !== number2);//true

var text1 = 'Sang';
var text2 = 'Hoàng';

var tNumber1 = '51';
var tNumber2 = '500';

console.log(text1 < text2); //true
console.log(Number(tNumber1) < Number(tNumber2)); //
// Các phép tính !: Phủ định, &&: Và , || : hoặc
var dieuKienA = true;
var dieuKienB = false;
console.log(!!dieuKienA); // true 
console.log(dieuKienA && dieuKienB); // false
console.log(dieuKienA || dieuKienB); // true
//Bài tập:
var n = 5;

console.log(n % 2 === 0) // false
console.log(n % 2 !== 0) // true

console.log((n % 2 === 0) || (n > 0)); // true
console.log((n % 2 === 0) && (n > 0)); // false
// Trị tuyệt đối  |5| = 5, |-5| = 5;
//Ví dụ 1: Tính trị tuyệt đối của 1 số dựa vào cấu trúc if()
/*
    if(true) {
        //Khối lệnh đúng mới thực thi
    }
*/
var d = 4;
if(d < 0) {
    //Thực thi nếu d < 0 là đúng thì làm
    d = -d;
}

console.log('d = ', d);

//Ví dụ 1: Cho phép người dùng nhập vào 1 giá trị => tính trị tuyệt đối 

document.getElementById('btnTinhTriTuyetDoi').onclick = function () {
    //input: number => do người dùng nhập
    var num = Number(document.getElementById('number1').value); //'4' => 4

    //output: number
    var output = num; //kỹ thuật cờ hiệu, lính canh, ...
    if(num < 0){
        output = -num;
    }
    document.getElementById('ketQua1').innerHTML = output;
}

// Ví dụ 2: Cho phép người dùng nhập vào 2 số => in ra số lớn nhất

document.getElementById('btnInSoLonNhat').onclick =function () {
    // input: soThu1: number, soThu2:number
    var soThu1 = Number(document.getElementById('soThu1').value);
    var soThu2 = Number(document.getElementById('soThu2').value);
    // output: max: number
    var max = 0;
    if(soThu1 > soThu2){
        max = soThu1;
    }else {
        max = soThu2;
    }
    document.getElementById('ketQua2').innerHTML = 'số lớn nhất: ' + max;
}


// Ví dụ 3: Viết chương trình cho phép người dùng nhập vào điểm toán, điểm lý, điểm hóa -> tính điểm trung bình và xếp loại theo công thức

document.getElementById('btnXepLoai').onclick = function () {
    var diemToan = Number(document.getElementById('diemToan').value);
    var diemLy = Number(document.getElementById('diemLy').value);
    var diemHoa = Number(document.getElementById('diemHoa').value);

    var DTB = (diemToan + diemLy + diemHoa)/3;
    var xepLoai = '';

    if(DTB < 5){
        xepLoai =' học lực yếu';
    }else if(DTB >= 5 && DTB < 6.5){
        xepLoai =' học lực trung bình';
    }else if(DTB >=6.5 && DTB < 8){
        xepLoai =' học lực khá';
    }else if(DTB > 8 && DTB < 10) {
        xepLoai=' học lực giỏi'
    }else{
        xepLoai=' Không hợp lệ'
    }
    document.getElementById('ketQua3').innerHTML ='Điểm trung bình: '+ Math.round(DTB) +xepLoai;
}

// Bài tập 1: Viết chương trình cho phép người dùng nhập vào số giờ làm và lương / 1h. Tính tiền lương theo công thức sau

document.getElementById('btnTinhLuong').onclick = function () {
    var soGioLam = Number(document.getElementById('soGioLam').value);
    var luongCB = Number(document.getElementById('luongCB').value);

    var tienLuong = 0;

    if(soGioLam <= 40){
        tienLuong = soGioLam * luongCB;
    }else if(soGioLam > 40){
        tienLuong = (luongCB * 40) + (luongCB * 1.5 * (soGioLam -40)) ;
    }else{
        tienLuong ='Không hợp lệ'
    }
    document.getElementById('ketQua_b1').innerHTML = 'Tổng tiền lương = ' +tienLuong.toLocaleString();

}

// var n=5;
// var ketQua ='';
// if(n % 2 ===0){
//     ketQua = 'Số chẵn';
// }else{
//     ketQua = 'Số lẻ';
// }

// Cách viết tắt
// ketQua = n%2===0 ? 'Số chẵn':'Số lẻ';

document.getElementById('btnTinhTongTien').onclick = function(){
    var tenSanPham = document.getElementById('tenSanPham').value;
    var soLuongNhap = Number(document.getElementById('soLuongSanPham').value);
    var donGiaNhap = Number(document.getElementById('donGiaNhap').value);

    var tongTien = 0;

    if(soLuongNhap <= 50){ //Nếu số lượng bé hơn hoặc = 50 sp
        tongTien = soLuongNhap * donGiaNhap;
    }else if(soLuongNhap > 50 && soLuongNhap <=100){
        // Giảm 8% => tiền gốc *92%
    tongTien = (soLuongNhap * donGiaNhap) * 92/100;
    }else if(soLuongNhap > 100){
        tongTien = (soLuongNhap * donGiaNhap) * 88/100
    }else{
        tongTien ='Không hợp lệ'
    }
    
    // In ra
    document.getElementById ('ketQua_b2').innerHTML = 'Tên SP: ' + tenSanPham + ' - Tổng tiền nhập: ' + tongTien;
}  

// Bài tập 3: Viết chương trình cho phép người dùng nhập vào 1 số n từ 1 -> 4. In ra số đó bằng chữ.Lưu ý: Khi người dùng nhập 1 số khác mà không phải 1,2,3,4 => in ra giá trị không hợp lệ !

document.getElementById('btnDocSo').onclick = function(){
   var soN = Number(document.getElementById('nhapSo').value);
    var ketQua = ''
    // Cách 1: Xử lý if else

//    if(soN === 1){
//     ketQua = 'Một';
//    }else if(soN ===2){
//     ketQua ='Hai';
//    }else if(soN ===3){
//     ketQua ='Ba'
//    }else if(soN ===4){
//     ketQua='Bốn'
//    }else{
//     ketQua='Vui lòng nhập giá trị từ 1 -> 4'
//    }

// Cách 2: Xử lý switch case
    switch(soN){
        case 1:{
            ketQua ='Một';
        };break;
        case 2:{
            ketQua='Hai';
        };break;
        case 3:{
            ketQua='Ba';
        };break;
        case 4:{
            ketQua='Bốn';
        };break;
        default:{
            ketQua ='Vui lòng nhập giá trị từ 1 -> 4';
        };
    }
   document.getElementById('ketQua_b3').innerHTML = ketQua;
}

document.getElementById('btnInThangNgay').onclick = function () {
    var soThang = Number(document.getElementById('soThang').value);
    var ketQua ='';

    switch (soThang){
        case 1:{
            ketQua ='tháng 1 có 31 ngày';
        };break;
        case 2:{
            ketQua ='tháng 2 có 20 ngày';
        };break;
        case 3:{
            ketQua ='tháng 3 có 31 ngày';
        };break;
        case 4:{
            ketQua ='tháng 4 có 30 ngày';
        };break;
        case 5:{
            ketQua ='tháng 5 có 31 ngày';
        };break;
        case 6:{
            ketQua='tháng 6 có 30 ngày';
        };break;
        case 7:{
            ketQua='tháng 7 có 31 ngày';
        };break;
        case 8:{
            ketQua='tháng 8 có 31 ngày';
        };break;
        case 9:{
            ketQua ='tháng 9 có 30 ngày';
        };break;
        case 10:{
            ketQua ='tháng 10 có 31 ngày';
        };break;
        case 11:{
            ketQua='tháng 11 có 30 ngày';
        };break;
        case 12:{
            ketQua='tháng 12 có 31 ngày';
        };break;
        default:{
            ketQua='Số tháng không hợp lệ';
        }
    }

    document.getElementById('ketQua-4').innerHTML = ketQua;
}