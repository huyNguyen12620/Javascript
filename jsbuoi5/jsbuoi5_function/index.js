/**
  Hàm dùng để làm gì ?
  + Tái sử dụng lại 1 logic code nào đó
  + Code 1 chương trình chính ngắn hơn khi gọi hàm 
  + Dễ bảo trì nâng cấp
  + Chia nhỏ vấn đề
 */

  console.log('Học frontend tại cybersoft thật tuyệt');
//   Cú pháp khai báo hàm
function inNoiDung(noiDung){
    // noiDung: param, tham số, input
  console.log(noiDung);
    
}

// Lệnh gọi hàm
var title = 'Hello các bạn'
inNoiDung('hello cybersoft');
inNoiDung('hello cybersoft');
inNoiDung(title);
inNoiDung('hello cybersoft');

// Ví dụ 1: Thay đổi nội dung của 3 đoạn text và gán màu sắc cho 3 đoạn nội dung khác nhau

// document.getElementById('pText1').innerHTML ='hello frontend dev';
// document.getElementById('pText1').style.color ='red';

// document.getElementById('pText2').innerHTML ='hello backend dev';
// document.getElementById('pText2').style.color ='blue';

// document.getElementById('pText3').innerHTML ='hello fullstack dev';
// document.getElementById('pText3').style.color ='green';
/**
 * Đây là 1 hàm nhận vào id của 1 thẻ và làm thay đổi nội dung, màu sắc,classname của thẻ
 * @param {*} id : Đây là id của 1 thẻ
 * @param {*} content : Đây là nội dung HTML của thẻ đó
 * @param {*} color : Đây là màu sắc của thẻ
 * @param {*} className : Đây là class của thẻ
 */

// Các nội dung thay đổi của 1 logic thì đưa ra thành input
function changeContent(id,content,color,className){ //id : id của thẻ, content: nội dung thẻ, color:màu sắc
    document.getElementById(id).innerHTML =content;
document.getElementById(id).style.color =color;
document.getElementById(id).style.fontSize = '30px';
document.getElementById(id).className = className;
}

// Thêm class alert
// Gọi hàm
changeContent('pText1','Frontend','red','alert alert-success'); //success
changeContent('pText2','Backend','blue','alert alert-danger'); //danger
changeContent('pText3','Fullstack','green','alert alert-primary');//primary

// Ví dụ 2: Xây dựng chức năng để tăng giảm kích thước của ngôi nhà và đoạn văn bản sau
document.getElementById('btnZoomInHome').onclick = function () {
    // input: fontSize: number
    // var fSize = document.getElementById('home').style.fontSize;
    // // replace: thay thế 1 chuỗi thành 1 chuỗi khác
    // fSize = Number(fSize.replace('px',''));
    // // output: Tăng fontSize
    // fSize += 10;

    // document.getElementById('home').style.fontSize = fSize +'px';

    // console.log(fSize)
    changeFontSize('home',10);
}

document.getElementById('btnZoomOutHome').onclick = function(){
    // input: fontSize: number
    var fSize = document.getElementById('home').style.fontSize;

    fSize = Number(fSize.replace('px',''));

    fSize -=10;
    document.getElementById('home').style.fontSize = fSize + 'px';
}
// Nhận vào 1 id
// Nhận vào size tăng giảm
function changeFontSize(id,size) {
    // Xác định input: id,size
    // DOM đến 1 id nào đó => lấy ra font-size
    var fSize = document.getElementById(id).style.fontSize;
    // Loại bỏ px của font-size
    fSize = Number(fSize.replace('px',''));

    // Tăng hoặc giảm dựa vào size
    fSize += size;

    document.getElementById(id).style.fontSize = fSize + 'px';
}

document.getElementById('btnZoomInText').onclick = function(){
    // input: fontSize: number

}