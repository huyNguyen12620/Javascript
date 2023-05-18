/**
 * Hàm nhận vào input là 1 mảng number ví dụ: [1,5,23,6,23] trả ra vị trí của số lớn nhất
 * @param {*} arrNumber  arrNumber là 1 mảng số 
 * @returns trả ra vị trí index của giá trị lớn nhất
 */
function findIndexMax(arrNumber){ //input: arrNumber: [1,2,3,4,56,,6]
        var indexMax = 0;
        // progress
    var max =  arrNumber[0];
    for(var index = 0; index < arrNumber.length; index++){
        if(arrNumber[index] > max){
            max = arrNumber[index];
            indexMax = index;
        }
    }

        return indexMax;
}

/**
 * Hàm nhận vào input là 1 mảng number ví dụ: [1,5,23,6,23] trả ra vị trí của số lớn nhất
 * @param {*} arrNumber  arrNumber là 1 mảng số 
 * @returns trả ra vị trí index của giá trị nhỏ nhất
 */
function findIndexMin(arrNumber){ //input: arrNumber: [1,2,3,4,56,,6]
    var indexMin = 0;
    // progress
var min =  arrNumber[0];
for(var index = 0; index < arrNumber.length; index++){
    if(arrNumber[index] < min){
        max = arrNumber[index];
        indexMin = index;
    }
}

    return indexMin;
}

/**
 * hàm nhận vào arrNumber (danh sách điểm), và diemGioi (Điểm quy định bao nhiêu là giỏi)
 * @param {*} arrNumber //arrNumber là danh sách điểm ví dụ: [4,2,5,6,2]
 * @param {*} diemGioi  //diemGioi là điểm qui dịnh bao nhiêu là giỏi ví dụ: 8 là giỏi
 * @returns //kết quả trả ra là số lượng sinh viên có điểm >= điểm giỏi
 */

function demSinhVienGioi(arrNumber,diemGioi){ // arrNumber: [2,4,2,4], diemGioi: 8
    //output: soLuongSv giỏi: number
    var output =0;
    for(var index =0; index < arrNumber.length;index++){
        if(arrNumber[index] >= diemGioi){
            output++; //Tăng số lương học sinh giỏi
        }
    }
    return output
}
/**
 * Hàm này sẽ nhận vào 1 mảng điểm và 1 mảng tên
 * @param {*} arrNumber arrDiem là mảng điểm người dùng truyền vào
 * @param {*} arrTen arrTen là mảng tên các người dùng ứng với điểm
 * @returns kết quả trả về là html ví dụ: 'B' <br/> 'C'
 */

function inDSSVTren5(arrDiem,arrTen){
        // output: số lương sv trên 5: number
        var output =''; 
        for(var i =0; i<arrDiem.length;i++){
            if(arrDiem[i] > 5){
                // Nếu điểm lớn hơn 5 tại vị trí index đó thì lấy tên tại vị trí index đó tương ứng + vào kết quả
                output +='<br/>' + arrTen[i];
            }
        }
        return output;
}

// Ví dụ: [9,8,7,4,2]
var arrNumber = [9,8,7,4,2];

 var result =arrNumber.sort(function(pt2,pt1){


    // return về số dương thì giữ nguyên, return về số âm thì hoán vị
    // if( pt2 < pt1){
    //     return -1;
    // }
    // return 1;
    return pt2-pt1;
})

console.log(result)

var arrString = ['12','2','4','53','A','B','C','Z'];

var result2 = arrString.sort(function(pt2,pt1){
    var pt1 = pt1.toLowerCase(); // 'aBCde' = 'abcde'
    var pt2 = pt2.toLowerCase();
    if(pt2<pt1){
        return -1
    }
    return 1

    // return pt2-pt1;
})
console.log(result2);

/**
 * Hàm nhận vào 1 arrNumber (mảng số nguyên) trả ra mảng đó sắp xếp tăng dần
 * @param {*} arrNumber là 1 mảng số nguyên chưa sắp xếp
 * @returns kết quả trả ra là 1 số nguyên đã được sắp xếp
 */
// Sắp xếp tăng dần
function sapXepTangDanSo(arrNumber){ //input: arr [12,26,3,46,65]
        // output: arr đã được sắp xếp
        arrResult = [];
        arrResult = arrNumber.sort(function(pt2,pt1){

            return pt2 - pt1;
        })


        return arrResult;
}



