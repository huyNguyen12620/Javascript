// MVC: Mô hình quản lý project

// M: Models chứa các file class (prototype) - lớp đối tượng, mỗi class đối tượng là 1 file

// V: View là nơi chứa các file html (giao diện html)
// C: Controllers là nơi chứa các file xử lý cho giao diện cùng tên

var mangSinhVien = []; //[sv1,sv2,sv3] => [{maSinhVien:'01', tenSinhVien:'nguyenvana'}, {maSinhVien:'02',tenSinhVien:'nguyenvanb'}]

document.querySelector("#btnThemSinhVien").onclick = function () {
  // input: thông tin sinh viên: SinhVien
  var sv = new SinhVien();
  // Lấy thông tin từ giao diện đưa vào input.sv
  sv.maSinhVien = document.querySelector("#maSinhVien").value;
  sv.tenSinhVien = document.querySelector("#tenSinhVien").value;
  sv.email = document.querySelector("#email").value;
  var ngaySinh = new Date(document.querySelector("#ngaySinh").value);
  sv.ngaySinh = ngaySinh.toLocaleDateString();
  sv.matKhau = document.querySelector("#matKhau").value;
  sv.khoaHoc = document.querySelector("#khoaHoc").value;
  sv.diemToan = Number(document.querySelector("#diemToan").value);
  sv.diemHoa = Number(document.querySelector("#diemHoa").value);
  sv.diemLy = Number(document.querySelector("#diemLy").value);
  console.log(sv);

  {
    // // Cách 1: Tạo html = createElement
    // // B1: Tạo ra thẻ tr
    // var trSinhVien = document.createElement('tr');
    // // Tạo ra td mã sinh viên
    // var tdMaSinhVien = document.createElement('td');
    // tdMaSinhVien.innerHTML = sv.maSinhVien;
    // var tdTenSinhVien = document.createElement('td');
    // tdTenSinhVien.innerHTML = sv.tenSinhVien;
    // var tdEmail = document.createElement('td');
    // tdEmail.innerHTML = sv.email;
    // var tdNgaySinh = document.createElement('td');
    // tdNgaySinh.innerHTML = sv.ngaySinh;
    // var tdKhoaHoc = document.createElement('td');
    // tdKhoaHoc.innerHTML = sv.khoaHoc;
    // var tdDiemTrungBinh = document.createElement('td');
    // tdDiemTrungBinh.innerHTML=sv.tinhDiemTrungBinh();
    // // Td chức năng
    // var btnXoa = document.createElement('button');
    // btnXoa.innerHTML ='Xóa';
    // btnXoa.className='btn btn-danger';
    // btnXoa.onclick = function(){
    //     // Từ thẻ con dom ra thẻ cha
    //     // var trParent = btnXoa.parentElement.parentElement;
    //     // closest: dom đến selector gần nhất nó
    //     var trParent = btnXoa.closest('tr')
    //     trParent.remove();
    // }
    // var tdChucNang = document.createElement('td');
    // tdChucNang.appendChild(btnXoa);
    // // Thêm nội dung td vào tr
    // trSinhVien.appendChild(tdMaSinhVien);
    // trSinhVien.appendChild(tdTenSinhVien);
    // trSinhVien.appendChild(tdEmail);
    // trSinhVien.appendChild(tdNgaySinh);
    // trSinhVien.appendChild(tdKhoaHoc);
    // trSinhVien.appendChild(tdDiemTrungBinh);
    // trSinhVien.appendChild(tdChucNang)
    // // Thêm nội dung tr vào giao diện
    // var tBody = document.querySelector('#tblSinhVien');
    // tBody.appendChild(trSinhVien);
  }

  // Cách 2: Chuỗi innerHTML
  mangSinhVien.push(sv);

  console.log("mangSinhVien", mangSinhVien);
  // output: html : string <tr></tr>
  renderTableSinhVien(mangSinhVien);

  //   Sau khi thêm sinh viên thành công => lưu mảng sinh viên vào localstorage
  var sMangSinhVien = JSON.stringify(mangSinhVien);
  luuLocalStorage("mangSinhVien", sMangSinhVien);
};

function renderTableSinhVien(arrSinhVien) {
  //input: arrSinhVien: [{},{},{}]
  // output: html = '<tr><td>....</td></tr>'
  var htmlContent = "";
  for (var index = 0; index < arrSinhVien.length; index++) {
    var sv = arrSinhVien[index]; //Mỗi lần duyệt lấy ra 1 object thứ index của arrSinhVien [{0},{1},{2}]
    // Từ object tạo ra thẻ tr
    // Nếu bấm từ nút thêm ( được new từ SinhVien => nên sẽ có tinhDiemTrungBinh)
    // Nếu lấy từ localstorage thì bị mất phương thức tinhDiemTrungBinh
    // .hasOwnProperty('ten_thuoc_tinh'): Nếu có tên thuộc tính đó trong object thì trả về giá trị true, không có trả về false
    if (!sv.hasOwnProperty("tinhDiemTrungBinh")) {
      // sv.__proto__ : mở rộng thuộc tính của object
      sv.tinhDiemTrungBinh = function () {
        var diemTB =
          (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) /
          3;
        return diemTB.toLocaleString();
      };
    }

    var tr = `
            <tr>
            <td>${sv.maSinhVien}</td>
            <td>${sv.tenSinhVien}</td>
            <td>${sv.email}</td>
            <td>${sv.ngaySinh}</td>
            <td>${sv.khoaHoc}</td>
            <td>${sv.tinhDiemTrungBinh()}</td>
            <td>
                <button class='btn btn-danger' onclick="xoaSinhVien('${index}')">Xóa</button>
                <button class='btn btn-danger ml-2' onclick="xoaSinhVienTheoMa('${
                  sv.maSinhVien
                }')">Xóa Mã SV</button>
                <button class='btn btn-primary ml-2' onclick="suaSinhVien('${
                  sv.maSinhVien
                }')">Sửa</button>
            </td>
            </tr>
        `;
    // Mỗi lần tạo xong thẻ tr sẽ + vào output
    htmlContent += tr;
  }

  document.querySelector("#tblSinhVien").innerHTML = htmlContent;
}
// mangSinhVien = [{maSinhVien:1,tenSinhVien:'nguyễn văn a'},{maSinhVien:2,tenSinhVien:'nguyễn văn b'}]
function suaSinhVien(maSinhVienClick) {
  // alert(maSinhVienClick);
  for (var index = 0; index < mangSinhVien.length; index++) {
    // Mỗi lần duyệt lấy ra 1 sinh viên object
    var sinhVien = mangSinhVien[index];
    // Đem mã sinh viên click só sánh với thằng object sinh viên lấy ra
    if (maSinhVienClick == sinhVien.maSinhVien) {
      // Tìm thấy
      // Gán các giá trị từ object lên các thẻ input
      document.querySelector("#maSinhVien").value = sinhVien.maSinhVien;
      document.querySelector("#tenSinhVien").value = sinhVien.tenSinhVien;
      document.querySelector("#email").value = sinhVien.email;
      document.querySelector("#matKhau").value = sinhVien.matKhau;
      var value = moment(sinhVien.ngaySinh);
      // console.log(value);
      document.querySelector("#ngaySinh").value = value;
      document.querySelector("#khoaHoc").value = sinhVien.khoaHoc;
      document.querySelector("#diemToan").value = sinhVien.diemToan;
      document.querySelector("#diemLy").value = sinhVien.diemLy;
      document.querySelector("#diemHoa").value = sinhVien.diemHoa;

      break;
    }
  }
}
// mangSinhVien = [{maSinhVien:1,tenSinhVien:'nguyễn văn a'},{maSinhVien:2,tenSinhVien:'nguyễn văn b'}]
document.getElementById("btnCapNhatSinhVien").onclick = function () {
  // Lấy dữ liệu từ người dùng nhập vào sau khi chỉnh sửa
  var sinhVienCapNhat = new SinhVien();
  // Lấy thông tin từ giao diện đưa vào input.sv
  sinhVienCapNhat.maSinhVien = document.querySelector("#maSinhVien").value;
  sinhVienCapNhat.tenSinhVien = document.querySelector("#tenSinhVien").value;
  sinhVienCapNhat.email = document.querySelector("#email").value;
  var ngaySinh = new Date(document.querySelector("#ngaySinh").value);
  sinhVienCapNhat.ngaySinh = ngaySinh.toLocaleDateString();
  sinhVienCapNhat.matKhau = document.querySelector("#matKhau").value;
  sinhVienCapNhat.khoaHoc = document.querySelector("#khoaHoc").value;
  sinhVienCapNhat.diemToan = Number(document.querySelector("#diemToan").value);
  sinhVienCapNhat.diemHoa = Number(document.querySelector("#diemHoa").value);
  sinhVienCapNhat.diemLy = Number(document.querySelector("#diemLy").value);
  console.log(sinhVienCapNhat);

  // Duyệt qua mảng tìm ra object sinhVien cần cập nhật
  for (var index = 0; index < mangSinhVien.length; index++) {
    // Mỗi lần duyệt lấy ra 1 sinh viên trong mảng
    var svMang = mangSinhVien[index];
    if (svMang.maSinhVien === sinhVienCapNhat.maSinhVien) {
      // Đem dữ liệu trong mảng sửa thành dữ liệu người dùng thay đổi
      svMang.tenSinhVien = sinhVienCapNhat.tenSinhVien;
      svMang.maSinhVien = sinhVienCapNhat.maSinhVien;
      svMang.email = sinhVienCapNhat.email;
      svMang.ngaySinh = sinhVienCapNhat.ngaySinh;
      svMang.matKhau = sinhVienCapNhat.matKhau;
      svMang.khoaHoc = sinhVienCapNhat.khoaHoc;
      svMang.diemToan = sinhVienCapNhat.diemToan;
      svMang.diemLy = sinhVienCapNhat.diemLy;
      svMang.diemHoa = sinhVienCapNhat.diemHoa;
      // ...
      renderTableSinhVien(mangSinhVien);
      break;
    }
  }
};

function xoaSinhVien(index) {
  // alert(maSVclick);
  mangSinhVien.splice(index, 1); //[{0},{1},{2}]
  // Sau khi xóa sinh viên xong thì tạo lại bảng
  renderTableSinhVien(mangSinhVien);
}
// mangSinhVien =[1,2,3,4,5,6,7,9,10,11,12]
// XÓA THEO TRƯỜNG ĐỊNH DANH
// function xoaSinhVienTheoMa(maSV) {
//   var viTriXoa = -1;
//   for (var index = 0; index < mangSinhVien.length; index++) {
//     // Mỗi lần duyệt lấy ra 1 sinh vien
//     var sinhVien = mangSinhVien[index];
//     if (sinhVien.maSinhVien == maSV) {
//       //Nếu obj sinh viên trong mảng == với lại mã sinh viên được click thì lấy ra  vị trí
//       viTriXoa = index;
//       break;
//     }
//   }
//   mangSinhVien.splice(viTriXoa, 1);
//   // Sau khi xóa tạo lại table mới
//   renderTableSinhVien(mangSinhVien);
// }

// XÓA THEO TRƯỜNG TRÙNG NHAU
function xoaSinhVienTheoMa(maSv) {
  var viTriXoa = -1;
  for (var index = mangSinhVien.length - 1; index >= 0; index--) {
    // Mỗi lần duyệt lấy ra 1 sinh viên
    var sinhVien = mangSinhVien[index];
    if (sinhVien.maSinhVien == maSv) {
      //Nếu obj sinh viên trong mảng == với lại mã sinh viên được click thì lấy ra vị trí
      // viTriXoa = index;
      // break;
      mangSinhVien.splice(viTriXoa, 1);
    }
  }

  // Sau khi xóa tạo lại table mới
  renderTableSinhVien(mangSinhVien);
}

function luuLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function layLocalStorage(key) {
  //  Kiểm tra xem localStorage có key đó không
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key);
  }
  return undefined;
}

// Định nghĩa sự kiện khi trang load xong html
window.onload = function () {
  if (layLocalStorage("mangSinhVien")) {
    // Biến đổi value thành mảng lại
    mangSinhVien = JSON.parse(layLocalStorage("mangSinhVien"));
    // Gọi hàm để từ mảng ra table
    renderTableSinhVien(mangSinhVien);
  }
};

// var svLocalStorage = {
//   maSinhVien: 1,
//   tinhDiemTrungBinh: function () {
//     console.log(321);
//   },
// };
// svLocalStorage.__proto__.tinhDiemTrungBinh = function () {
//   console.log(123);
// };

// svLocalStorage.tinhDiemTrungBinh();
// console.log(svLocalStorage);

// ================ Mở rộng thuộc tính của prototype========================
// SinhVien.prototype.tenThuocTinhMoRong = "abc";
// SinhVien.prototype.tenThuocTinhMoRongFunc = function () {
//   console.log("abc");
// };

// var sv = new SinhVien();
// console.log(sv.tenThuocTinhMoRong);
// console.log(sv.tenThuocTinhMoRongFunc);
// sv.tenThuocTinhMoRongFunc();
