// array: là kiểu dữ liệu lưu trữ được nhiều giá trị và cách nhau bởi dấu,
var arrNumber = [4, 5, 6, 10, 28, 29, 39, 43];
var arrHoten = ["Nam", "Bình", "Sang", "Bảo", "Hằng",'Hạnh'];

// Read, create, update, delete
// Read
// Truy xuất 1 phần tử trong mảng cú pháp: tenMang [index];
// console.log(arrHoten[3])

for (var i = 0; i <= arrHoten.length; i++) {
  console.log(arrHoten[i]);
}

/*
-------------Thêm 1 phần tử vào mảng--------------
Cú pháp: arr.push['giá trị];

*/

arrHoten.push['Minh'];
console.log(arrHoten)

// console.table(arrHoten);

// Cú pháp: pop() lấy ra 1 phần tử trong mảng ở vị trí cuối cùng và xóa nó đi khỏi mảng

let hoTenCuoi = arrHoten.pop();

console.log(arrHoten)

//Cú pháp: Thêm 1 phần tử vào đầu mảng (sẽ làm thay đổi vị trí index các phần tử còn lại nên ít sử dụng)
arrHoten.unshift('Thảo');
console.log(arrHoten)

// shift: Lấy ra phần tử đầu mảng => Thay đổi vị trí index

let firstItem = arrHoten.shift();

console.log(firstItem);
console.log(arrHoten)

/*---------------------Thay đổi giá trị phần tử trong mảng----------- */
arrHoten[2] = 'Thanh';
console.log(arrHoten);

/*-------------------Xóa 1 phần tử ở mảng------------- */
// Cú pháp: arr.splice(index,1)
arrHoten.splice(3,1);
console.log(arrHoten)

/*--------------------------Bài tập ví dụ-----------------*/

var arrNumber = [4, 5, 6, 10, 28, 29, 39, 43];

document.getElementById('btnNhapSo1').onclick = function () {
    // input: number: số người dùng nhập
    var iSo = Number(document.getElementById('nhapSo1').value);
        // output: string
        var output = '';
        // Thêm 1 phần tử vào mảng
    arrNumber.push(iSo);

    output = '[' + arrNumber +']'

    document.getElementById('arr').innerHTML = output;
}


document.getElementById('btnXoaGiaTri').onclick = function () {
    //input: number: số người dùng nhập
    var giaTri = Number(document.getElementById('giaTri_2').value);
    // output: index: vị trí phần tử xóa
    var index =-1;
    // Tìm kiếm, xóa, lấy ra thay đổi,..... phải duyệt mảng(Chạy index qua các phần tử của mảng)
    // for (var i = 1; i < arrNumber -1; i >=0;i++)
    for(var i= arrNumber.length -1; i>=0; i--){
      // Mỗi lần duyệt lấy ra 1 giá trị
      var ele = arrNumber[i];
      if(giaTri === ele){
        index = i //Nếu giá trị nhập vào trùng với giá trị trong mảng thì lấy ra giá trị i (index tại đó)
        break;
      }
    }

      if(index !==-1){
        // Xóa dữ liệu tại vị trí tìm thấy
        arrNumber.splice(index,1);
        // Cập nhật lại giao diện
    document.getElementById('arr').innerHTML = '[' + arrNumber + ']';

      }else{
          alert('Không tìm thấy phần tử '+ giaTri+' trong mảng')
      }


}

// Lấy dữ liệu thẻ thông qua tagname
var arrTagSection = document.getElementsByTagName('section');

arrTagSection[0].style.fontSize ='20px';

for(var index =0; index < arrTagSection.length;index++){
  arrTagSection[index].style.fontSize ='20px'
}

console.log(arrTagSection);

// Ví dụ 2: Lấy dữ liệu thông qua className

var arrClassText = document.getElementsByClassName('txt');

for(var index =0;index < arrClassText.length;index++){
  // var tagText =arrClassText[i]
  arrClassText[index].style.color = 'red'
}

console.log(arrClassText);

// Trường hợp thêm 1 class vào để code thêm chức năng cho thẻ mà không ảnh hưởng code cũ của người khác
var tagTextColor = document.getElementsByClassName('text-color')[0];

tagTextColor.style.color = 'green';



/*
  ---------------------querySelector-----------------------

  querySelector: Truy xuất đến thẻ dựa vào selector.Nếu có nhiều thẻ trùng selector thì chỉ lấy 1 thẻ đầu tiên duy nhất. Nếu không tìm thấy thẻ nào thì trả undefined.Thường dùng để truy xuất 1 thẻ khớp selector.

*/

// var btn =document.getElementById('btnSubmit')

// btn.onclick =function () {
//  alert('con cặc') 
// }

var btn = document.querySelector('#btnSubmit');
btn.onclick=function(){
  alert('submit')
}                                                                                     /*---------------------querySelectorAll------------------- */    
// querySelector all: Truy xuất đến tất cả thẻ có chứa selector khớp với nó. Kết quả trả về luôn luôn là 1 mảng các thẻ. Trong trường hợp chỉ có 1 thẻ khớp với selector kết quả vẫn trả về mảng có 1 phần tử

var btnLogin = document.querySelector('#btnDangNhap');
btnLogin.onclick = function () {
  var arrInput = document.querySelectorAll('#frmLogin input');
  var taiKhoan = arrInput[0].value;
  var matKhau = arrInput[1].value;

  console.log('taiKhoan ' + taiKhoan);
  console.log('matKhau ' + matKhau)
  
}

console.log(btnLogin)



// --------------------Luyện tập về mảng--------------------------

var lstNumber =  [12,15,17,19,22,44,66,32,37,7,5,2];
var btnInSo =document.querySelector('.btnInSo');
btnInSo.onclick = function () {
 
  //input: lstNumber: mảng
  var indexMax = 0;
  var max =lstNumber[0];

  for(var index =0; index < lstNumber.length;index++){
    var num = lstNumber[index]; //lstNumber[0] =12
    if(num > max){
      max = num; //Lưu giá trị
      indexMax = index //Lưu vị trí
    }

  }
// output:max: number: vị trí số lớn nhất , indexMax:number: giá trị lớn nhất trong mảng
// In ra giao diện: output
document.querySelector('#ketQua_b1').innerHTML = 'Số lớn nhất là" ' +max + ' Vị trí là : ' + '[' + indexMax + ']'
} 

document.querySelector('.btnInSoLe').onclick = function () {
  // input: lstNumber
    var arrSoLe =[];
      for(var i =0; i < lstNumber.length;i++){
        // Mỗi lần duyệt lấy ra 1 số
        var num = lstNumber[i];
        if(num % 2 !==0){
          arrSoLe.push(num); //Nếu là số lẻ thì thêm vào mảng output arrSoLe
        }
      }
      document.querySelector('.ketQua_b2').innerHTML = 'arrSoLe = [' + arrSoLe + ']'; 

}