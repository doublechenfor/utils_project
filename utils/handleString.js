
 // 判断字符串中是否有字母(大、小写)
 function hasLetter(str) {
      for (var i in str) {
        var asc = str.charCodeAt(i);
        if ((asc >= 65 && asc <= 90) || (asc >= 97 && asc <= 122)) {
          return true;
        }
      }
      return false;
    }
  // 判断字符串是否是数字()
 function isNumber(val) {
        var regPos = /^\d+(\d+)?$/; //非浮点负数
        var regNeg = /^(-(([0-9]+[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
        if(regPos.test(val) || regNeg.test(val) ) {
            return true;
            } else {
            return false;
            }
        }
export {
    hasLetter ,
    isNumber 
}