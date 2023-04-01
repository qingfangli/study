// split() 把字符串转为数组
const str = 'hello word'
const arr = str.split(' ')
console.log(arr);

// substring(开始的索引号[，结束的索引号]) 字符串截取

// startsWith(要搜索的字符串[,在str中搜索要搜索的字符串的开始位置，默认为0])


var romanToInt = function(s) {
    var iv = RegExp(/IV/)
    var ix = RegExp(/IX/)
    var xl = RegExp(/XL/)
    var xc = RegExp(/XC/)
    var cd = RegExp(/CD/)
    var cm = RegExp(/CM/)
    if(s == 'IV'){
        return 4
    }else if(s == 'IX'){
        return 9
    }else if(s == 'XL'){
        return 40
    }else if(s == 'XC'){
        return 90
    }else if(s == 'CD'){
        return 400
    }else if(s == 'CM'){
        return 900
    }else{
        let num = 0
        for(let i = 0;i < s.length;i++){
            if(s[i] == 'I'){
                num += 1
            }else if(s[i] == 'V'){
                num += 5
            }else if(s[i] == 'X'){
                num += 10
            }else if(s[i] == 'L'){
                num += 50
            }else if(s[i] == 'C'){
                num += 100
            }else if(s[i] == 'D'){
                num += 500
            }else if(s[i] == 'M'){
                num += 1000
            }
              
        }
        return num
    }
};