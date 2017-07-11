/**
 * js选择器简便方式
 * @param selector
 * @param context
 * @returns {*}
 */

function $(selector,context){
    context = context || document;
    switch(selector.charAt(0)){  //检索第一个是#.还是其他；
        case"#":
            return[document.getElementById(selector.substring(1))];     //比如#div进入这里得div
            break;
        case".":
            return getByClass(selector.substring(1),context);
            break;
        default:
            return context.getElementsByTagName(selector);
            break;
    }
}


/**
 * 查找符合className的元素 （解决ie不能用class选择器）
 * @param className
 * @param context
 * @return 一个数组
 */
function getByClass(className,context){
    context = context || document;
    var result = [];
    var arr =context.getElementsByTagName("*");
    var reg = new RegExp("\\b"+className+"\\b");
    for(var i = 0;i < arr.length;i++){
        if(reg.test(arr[i].className)){
            result.push(arr[i]);
        }
    }
    return result;
}
