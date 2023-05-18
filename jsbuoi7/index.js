/**
  Bài tập 1: Tính tổng từ 1 cho đến số người dùng nhập vào

 */

  document.getElementById("btnTinhTong").onclick = function () {
    // input số người dùng nhập: number
    var iSo = Number(document.getElementById("iSo1").value);
  
    // output: tổng : number
    var tong = 0;
  
    // Bước 1: Khai báo giá trị bắt đầu
    var soHang = 1;
  
    // Bước 2:Điều kiện lặp
    while (soHang <= iSo) {
      //Đúng thì lặp, sai thì dừng
      //Bước 3: Khối lệnh xử lý
      tong = tong + soHang;
      // Bước 4: Thay đổi giá trị bắt đầu
      soHang++; //soHang = soHang + 1
    }
    // In output ra giao diện
    document.getElementById("ketQua1").innerHTML = tong;
  };
  
  /**
      Bài tập 2: Cho phép người dùng nhập vào 1 giá trị. In ra số div tương ứng với giá trị đó với nội dung hello cybersoft
     */
  
  document.getElementById("btnInTheDiv").onclick = function () {
    // input: iSo = 2
  
    var iSo = Number(document.getElementById("iSo2").value);
    // output: html = <div>div1</div> <div>div2</div>
    var html = "";
    //B1: Khai báo giá trị bắt đầu
    var soLan = 1;
    // Bước 2: Điều kiện lặp
    while (soLan <= iSo) {
      // Lặp tới khi nào số lần nhỏ hơn hoặc = iSo
      // B3: Xử lý
      var div =
        '<div class ="alert alert-danger">Hello CyberSoft ' + soLan + " </div>";
  
      html = html + div; // html += div
  
      // B4:Thay đổi giá trị bắt đầu
      soLan++;
    }
    document.getElementById("ketQua2").innerHTML = html;
  };
  
  /**
   * Bài tập 3: Cho phép người dùng nhập vào 1 số. Cho biết số đó có phải là số nguyên tố hay không
  
   * */
  
  document.getElementById("btnKiemTraSoNT").onclick = function () {
    // input: iso: number
    var iSo = Number(document.getElementById("iSo3").value);
    // output: ketQua: string (iSo là số nguyên tố ! iso không phải là số nguyên tố)
    var ketQua = "";
  
    /**
  4 yếu tố:
  + Giá trị bắt đầu (giá trị này sẽ hưởng đến điều vòng lặp)
  + Điều kiện lặp 
  + Khối lệnh thực thi
  + Xử lý thay đổi giá trị bắt đầu
  
  */
  
    //B1: Giá trị bắt đầu
    var kiemTraSoNT = true; //Kỹ thuật cờ hiệu (lính canh)
    var uoc = 2;
    //B2: Điều kiện lặp
    while (uoc <= Math.sqrt(iSo)) {
      //B3: xử lý kiểm tra ước
      if (iSo % uoc === 0) {
        //Nếu có 1 trường hợp xảy ra => nó ko còn là số nguyên tố
        kiemTraSoNT = false;
        break; //Thoát khỏi vòng lặp ngay lập tức
      }
      uoc++;
      //B4: thay đổi giá trị bắt đầu
    }
    if (kiemTraSoNT && iSo != 1) {
      // true && false
      ketQua = iSo + " là số nguyên tố !";
    } else {
      ketQua = iSo + " không phải là số nguyên tố";
    }
    // in kết quả
  
    document.getElementById("ketQua3").innerHTML = ketQua;
  };
  
  // Cách 1
  // document.getElementById('btnKiemTraSoNT').onclick = function () {
  //     // input: iso: number
  //     var iSo = Number(document.getElementById('iSo3').value);
  //     // output: ketQua: string (iSo là số nguyên tố ! iso không phải là số nguyên tố)
  //     var ketQua = '';
  
  //     // Giá trị bắt đầu
  //     var dem = 0;
  //     var uoc = 1; //bắt đầu ước số là 1
  
  //     while(uoc <= iSo){ // Điều kiện lặp
  //     // Khối lệnh thực thi
  //         // Kiểm tra số người dùng nhập ví dụ 10 có chia hết ước hay không
  
  //         if(iSo % uoc == 0){ //Nếu chia hết thì tăng biến đếm
  //             dem = dem + 1;
  
  //         }
  //     // Thay đổi giá trị bắt đầu
  //         uoc++;
  //     }
  //     // Sau khi lặp xem dem số lần có = 2 hay không
  
  //     if(dem == 2){
  //         ketQua = iSo + ' là số nguyên tố';
  //     } else{
  //         ketQua = iSo + ' không phải là số nguyên tố';
  //     }
  
  //     // In kết quả ra giao diện
  
  //     document.getElementById('ketQua3').innerHTML = ketQua;
  
  // }
  
  /**
   Bài tập 4: Cho phép người dùng nhập vào 1 số. Tính tổng các số chẵn từ 2 -> số đó (hoặc nhỏ hơn 1 đơn vị)
  
   */
  
  document.getElementById("btnTinhTongSoChan").onclick = function () {
    //  input số :number
    var iSo = Number(document.getElementById("iSo4").value);
  
    // output: Tổng: number
    var tong = 0;
  
    // Bước 1: Xác định giá trị bắt đầu
    var soHang = 2;
    while (soHang <= iSo) {
      //B2: Xác định điều kiện lặp
      // B3: Thực thi khối lệnh
      tong = tong + soHang;
  
      // B4: thay đổi giá trị lặp
      soHang = soHang + 2; //soHang += 2
    }
    document.getElementById("ketQua4").innerHTML = tong;
  };
                  
  // Bài tập 5: Cho phép người dùng nhập vào 1 số, in ra giao diện số ngôi sao tương ứng
  
  document.getElementById('btnInSao').onclick = function () {
      // Cách 2
      // input: so : number
      var iSo = Number(document.getElementById('soSao').value);
  
      // output: html: <i class="fa fa-star text-warning"></i>
  var html ='';
  //     //B1: giá trị bắt đầu
  //     var soLan = 1;
  //     while(soLan <= iSo){ //B2: Điều kiện lặp
  //         // B3: tạo ra 1 thẻ ngôi sao đưa vào output
  //         var tagSao = '<i class="fa fa-star text-warning mr-4"></i>';
  //         //Lấy kết quả nối thêm chuỗi ngôi sao
  //         html += tagSao;
  //         //B4: tăng giá trị lặp
  //         soLan++;
          
          for(var soLan=1; soLan <= iSo; soLan++){
              //B3: tạo ra 1 thẻ ngôi sao đưa vào output
              var tagSao = '<i class="fa fa-star text-warning"></i>';
              // Lấy kết quả nối thêm chuỗi ngôi sao
              html += tagSao;
  
          }
  document.getElementById('ketQua5').innerHTML = html;
  
  
      }
      
  
  // Cách 1:
  // // in output ra giao diện
  //     document.getElementById('ketQua5').innerHTML = html;
  // }
  
  // document.getElementById('btnInSao').onclick = function () {
  //     // Cách 1
  //     // input: so : number
  //     var iSo = Number(document.getElementById('soSao').value);
  
  //     // output: html: <i class="fa fa-star text-warning"></i>
  // var html ='';
  //     //B1: giá trị bắt đầu
  //     var soLan = 1;
  //     while(soLan <= iSo){ //B2: Điều kiện lặp
  //         // B3: tạo ra 1 thẻ ngôi sao đưa vào output
  //         var tagSao = '<i class="fa fa-star text-warning mr-4"></i>';
  //         //Lấy kết quả nối thêm chuỗi ngôi sao
  //         html += tagSao;
  //         //B4: tăng giá trị lặp
  //         soLan++;
  
  //     }
  // // in output ra giao diện
  //     document.getElementById('ketQua5').innerHTML = html;
  // }
  
  //Bài tập 6:Cho người dùng nhập vào số hàng số cột => in ra số sao tương ứng

  document.getElementById('btnInSao_b6').onclick = function () {
    // input: soHang: number, soCot: number

    var soHang = Number(document.getElementById('soHang').value);
    var soCot = Number(document.getElementById('soCot').value);

    // output: string
    var output = '';

    for(var soLanHang =1;soLanHang <= soHang;soLanHang++){
           
        var hangSao = inHangSao(soCot);
    /*
 B1: Tạo ra biến số lần
   In ra 1 hàng sao trước
    B2: Điều kiện lặp
    for( var soLan = 1; soLan <= soCot; soLan++){
     B3: Xử lý
        output += ' * ' //output = output + ' * '
     };
    */
    
    //In ra thẻ br
    output += '<br/>';
    }
    document.getElementById('ketQua6').innerHTML = output;
  }

//In hàng sao
  function inHangSao(soLan){ //input: soLan = 5

    var output ='';

    for(var i=0; i <= soLan;i++){
        output += ' * ';
    }


   return output; // output

  }

  //Bài 7: Cho phép người dùng nhập vào 1 số. In ra các số nguyên tố từ 2 đến nhỏ hơn hoặc = số đó

    document.getElementById('btnInSoNT').onclick = function(){
        //input: number
        var so =Number( document.getElementById('nhapSo7').value);
        // output: '2 3 5 7': string
        var ketQua = '';

        
        for(var i = 2; i<= so;i++){
            //B3: Chạy qua 1 con số sẽ kiểm tra số đó có phải số nguyên tố không nếu đúng thì mới cộng vào output
          var kiemTra =  kiemTraSoNT(i);
          if(kiemTra){
            ketQua += i + ' ';
          }
        }
        document.getElementById('ketQua7').innerHTML = ketQua;
    }

   