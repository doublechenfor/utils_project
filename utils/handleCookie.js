export const GetCookie = function(name) {
    let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    let arr = document.cookie.match(reg)
    if (arr) {
      return unescape(arr[2])
    } else {
      return null
    }
  }
  
  export const DelCookie = function(name) {
    let exp = new Date()
    exp.setTime(exp.getTime() - 1)
    let cval = GetCookie(name)
    if (cval != null) {
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()
    }
  }
  
  export const SetCookie = function(name, value, expiresTime) {
    let eTime = 0
    if (expiresTime) {
      eTime = expiresTime
    } else {
      const Days = 30     // 存储天数
      let exp = new Date()
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
      eTime = exp.toGMTString()
    }
    document.cookie = name + "=" + escape(value) + ";expires=" + eTime
  }

