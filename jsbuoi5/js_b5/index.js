/**
  4 yếu tố:
  + Giá trị bắt đầu (giá trị này sẽ ảnh hưởng đến điều kiện vòng lặp)
  + Điều kiện lặp
  + Khối lệnh thực thi
  + Xử lý thay đổi giá trị bắt đầu
 */

  //Ví dụ 1: in ra console.log('Hello cybersoft) 10 lần

//  B1: Giá trị bắt đầu
var soLan = 1;

while(soLan <= 10){ //B2: nhỏ hơn =10 lần thì làm
    //B3: Khối xử lý
    console.log('hello cybersoft', 'số lần' ,soLan);
    // B4: Thay đổi giá trị lặp
    soLan += 1;
}

// Tính giai thừa
// 5! = 5 * 4 * 3 * 2 * 1 ;
// 5! = 1 * 2 * 3 * 4 * 5 ;
//input:
var so =5;

// output: giaTriGiaThua: number
var soHang = 1;

// B1: Xác định giá trị bắt đầu
var giaiThua = 1;

// B2:
        // 1 <= 5
while(soHang <= so) { //B2: Điều kiện lặp

    // B3: tính giai thừa
    giaiThua *= soHang
    // B4: thay đổi điều kiện lặp
    soHang += 1;
}

console.log('giai thừa',giaiThua)

