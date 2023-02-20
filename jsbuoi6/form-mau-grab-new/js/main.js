// file xử lý cho giao diện grab
//input:loaiXe: string, soKm: number, thoiGianCho: number;
var loaiXe = "GrabCar";
var soKm = 0;
var thoiGianCho = 0;

// output: tongTien: number
var tongTien = 0;

document.getElementById("GrabCar").onclick = function () {
  loaiXe = document.getElementById("GrabCar").id;
  console.log(loaiXe);
};

document.getElementById("GrabSUV").onclick = function () {
  loaiXe = document.getElementById("GrabSUV").id;
  console.log(loaiXe);
};

document.getElementById("GrabBlack").onclick = function () {
  loaiXe = document.getElementById("GrabBlack").id;
  console.log(loaiXe);
};

document.getElementById("btnTinhTien").onclick = function () {
  // input đã khai báo khi start ứng dụng
  soKm = Number(document.getElementById("soKM").value);
  thoiGianCho = Number(document.getElementById("thoiGianCho").value);

  // Xử lý để có được output
  switch (loaiXe) {
    case "GrabCar":
      if(soKm <=1){
        tongTien = 8000 + thoiGianCho * 2000;
      }else if(soKm > 1 && soKm <=19){
        tongTien = 7500 * soKm + thoiGianCho *2000;
      }else if(soKm > 19){
        tongTien = 7000 * soKm + thoiGianCho *2000;
      }
      break;

    case "GrabSUV":
      if(soKm <= 1){
        tongTien = 9000 + thoiGianCho *3000;
      }else if(soKm > 1 && soKm <=19){
        tongTien = 8500 * soKm + thoiGianCho *3000;
      }else if(soKm > 19){
        tongTien = 8000 * soKm + thoiGianCho *3000;
      }
      break;

    case "GrabBlack":
        if(soKm <= 1){
            tongTien = 10000 + thoiGianCho *4000;
          }else if(soKm > 1 && soKm <=19){
            tongTien = 9500 * soKm + thoiGianCho *4000;
          }else if(soKm > 19){
            tongTien = 9000 * soKm + thoiGianCho *4000;
          }
      break;
      default:{
        console.log('Chọn loại xe')
      }
  }
//   Hiển thị div tính tiền

  document.getElementById('divThanhTien').style.display='block';
  document.getElementById('xuatTien').innerHTML = tongTien.toLocaleString();
// console.log('tong tiền', tongTien)
// Gán các giá trị lên phần div in (div#printDiv)

//   Cách 2: Dùng if else
//   if(loaiXe === 'GrabCar'){
//     // Xử lý

//   }else if(loaiXe === 'GrabSUV'){
//     // Xử lý
//   }else if(loaiXe === 'GrabBlack'){
//     // Xử lý
//   }else{
//     console.log('Chọn loại xe!')
//   }
  document.getElementById('btnInHoaDon').onclick = function(){
    document.getElementById('demoGrab').style.display= 'none';
    document.getElementById('printDiv').style.display ='block';
    window.print();
    document.getElementById('demoGrab').style.display= 'flex';
    document.getElementById('printDiv').style.display ='none';

  }
};
