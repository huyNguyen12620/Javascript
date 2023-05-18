// Bài 1: Bài 1: Trong kỳ thi tuyển, một thí sinh sẽ trúng tuyển nếu có điểm tổng kết lớn hơn hoặc bằng điểm chuẩn và không có môn nào điểm 0.
// -Điểm tổng kết là tổng điểm của 3 môn thi và điểm ưu tiên
// -Điểm ưu tiên bao gồm điểm ưu tiên theo khu vực và điểm ưu tiên theo đối tượng
// Viết chương trình nhập: điểm chuẩn của hội đồng, điểm 3 môn thi của thí sinh, khu vực (nhập X nếu không thuộc khu vực ưu tiên ) và đối tượng dự thi (Nhập 0 nếu không thuộc đối tượng ưu tiên).Cho biết thí sinh đó đậu hay rớt và tổng số điểm đạt được
document.getElementById("btnTinhDiem").onclick = function () {

    var diemHoiDong = Number(document.getElementById('diemHoiDong').value);
    var diemToan = Number(document.getElementById('diemToan').value);
    var diemLy = Number(document.getElementById('diemLy').value);
    var diemHoa = Number(document.getElementById('diemHoa').value);
    var diemKhuVuc = document.getElementById('diemKhuVuc').value;
    var diemDoiTuong = document.getElementById('diemDoiTuong').value;

    // var getDiemKhuVuc =''
    var tongDiem=0;
    tongDiem = diemToan + diemLy + diemHoa;
    var ketQua ='';

    if(diemKhuVuc === 'A'){
        tongDiem += 2;
    }else if(diemKhuVuc === 'B'){
        tongDiem += 1;
    }else if(diemKhuVuc==='C'){
        tongDiem +=0.5;
    }else{
        tongDiem =tong3Mon 
    }

    if(diemDoiTuong === '1'){
        tongDiem += 2.5;
    }else if(diemDoiTuong === '2'){
        tongDiem += 1.5;
    }else if(diemDoiTuong === '3'){
        tongDiem += 0.5;
    }

    if(tongDiem >= diemHoiDong){
        ketQua = 'Thí sinh đậu với số điểm ' + tongDiem;
    }else{
        ketQua = 'Thí sinh rớt với số điểm ' + tongDiem
    }

    document.getElementById('ketQua1').innerHTML = ketQua;
};

// Viết chương trình nhập vào thông tin tiêu thụ điện (tên, số kw)

document.getElementById('tinhTienDien').onclick =function () {
   var hoTen= document.getElementById('hoTen').value;
   var soKw = Number(document.getElementById('soKw').value);
    var tongTienDien = 0;

    if(soKw <=50){
        tongTienDien = soKw * 500;
    }else if(soKw > 50 && soKw <=100){
        tongTienDien = soKw *650;

    }else if(soKw >100 && soKw <= 200){
        tongTienDien = soKw *850;
    }else if(soKw >200 && soKw <=250 ){
        tongTienDien = soKw * 1100
    }else{
        tongTienDien = soKw *1300;
    }

document.getElementById('ketQua2').innerHTML = hoTen + ' cần đóng ' + tongTienDien +' USD ' + ' tiền điện';





}