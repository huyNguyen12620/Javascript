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
