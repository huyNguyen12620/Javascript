// .innerHTML: là phần nội dung giữa 2 thẻ đóng mở <tag>innerHTML</tag>
document.getElementById("txt").innerHTML = "hello world";

// .value: là nội dung của thẻ input
document.getElementById("idText").value = "hello bc28";

//.src: là nội dung hình của thẻ img
document.getElementById("hinhAnh").src = "https://i.pravatar.cc?u=1";

/* function: hàm thực thi khi người dùng thao tác 1 sự kiện

    Khai báo function
    function ten_ham(){
        **Nội dung code
    }
*/

function handleClick() {
  alert(123);
}

//----------------------Các ví dụ về js-------------------------

/**
  Ví dụ 1: Thay đổi nội dung js
 */

function xuLyVidu1() {
  // DOM: document object model
  var tagP = document.getElementById("pText");

  document.getElementById("pText").innerHTML = "Đã thay đổi rồi nhé !";
  // Thay đổi css của thẻ: .style.[thuộc tính css]
  tagP.style.color = "red";
  tagP.style.fontSize = "24px";
  tagP.style.fontWeight = "600";
  tagP.className = "alert alert-danger";
}

/*
     <p>Ẩn nội dung của thẻ p đi</p>
     <p>Thay đổi nội dung thẻ h3 thành cybersoft fronted</p>
     <p>Cho thẻ h3 1 viền border 1px</p>
     <p>Cho thẻ h3 có background màu cam</p>
     <p>Làm mờ thẻ h3 với opacity</p>               
  */
function xuLyViDu2(){
    var tagP = document.getElementById("pViDu2");
    var tagH3 = document.getElementById("h3ViDu2");

    tagP.style.display = "none";
    tagH3.innerHTML = "cybersoft frontend";
    tagH3.style.border = "solid 1px";
    tagH3.style.backgroundColor = "orange";
    tagH3.style.opacity = '0.5';
}


/*
    Ví dụ 3: Xây dựng tính năng cho 2 nút button bật đèn và tắt đèn

*/

var btnBatDen = document.getElementById('btnBatDen');
btnBatDen.onclick = function(){
    var tagImg = document.getElementById('hinhAnhViDu3');
    tagImg.src = './img/pic_bulbon.gif';
    // xử lý active button
    btnBatDen.className = 'btn btn-success';
    btnTatDen.className ='';

}

var btnTatDen = document.getElementById('btnTatDen');
btnTatDen.onclick = function(){
  var tagImg = document.getElementById('hinhAnhViDu3');
  tagImg.src = './img/pic_bulboff.gif';
  // Xử lý active button
  btnTatDen.className = 'btn btn-success';
  btnBatDen.className ='';

}


// Bài tập tính tiền tip

// Bài 1: ứng dụng tính tiền tip

document.getElementById('btnTinh').onclick = function () {
    // Ghi chú: tất cả dữ liệu lấy từ giao diện mặc định là chuỗi
    //input: tongTien: number , phanTramTip: number, soNhanVien: number

    var tongTien = Number(document.getElementById('tongTienThanhToan').value);
    var phanTramTip = document.getElementById('phanTramTip').value;

    var soNhanVienTip = Number(document.getElementById('soNhanVienTip').value);


    // output: tienTip: number
    var tienTip = 0;

    // progress
    tienTip = tongTien * phanTramTip /100 /soNhanVienTip;
    document.getElementById('tienTip').innerHTML = tienTip + '$'
}
