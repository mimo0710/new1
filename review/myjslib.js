/**深克隆
 *
 */
function cloneObj(obj){
    var newObj ={};
    for(var p in obj){
        if(typeof obj[p] === "object"){
            newObj[p] = cloneObj(obj[p]);
        }else{
            newObj = obj[p];
        }
    }
    return newObj;
}

/**去掉首位空格
 *
 */
 function trim(str){
    return str.replace(/^\s+|\s+$/g,"")
}

/**查找符合clsaaName的元素
 *@param className
 *@param context
 * @return {Array}
 */
function getByClass(className,context){
    context = context ||document;
    var result = [];
    var arr = context.getElementsByClassName("*")
    for(var i=0;i<arr.length;i++){
        var reg = new RegExp("\\b"+classname+"\\b",g);
        if(reg.test(arr[i].className)){
            result.push(arr[i]);
        }
    }
    return result;
}

/**获取当前元素样式
 * @param elem
 * @param attr
 * @return {*}
 */
function getStyle(elem,attr){
    //能力检测
    if(elem.currentStyle){             //IE
        return elem.currentStyle[attr];
    }else if(window.getComputedStyle){      //标准浏览器
        return getComputedStyle(elem,false)[attr];
    }else{
        return elem.style[attr];
    }
}
/**
 * 用js给div样式
 * @param elem
 * @param attr
 * @param value
 * @returns {*}
 */
function css(elem,attr,value){
    if(value){
        elem.style[attr] = value;
    }else{
        if(typeof attr === "string"){
            return getStyle(elem,attr);
        }else{
            for(var p in attr){
                elem.style[p] = attr[p]
            }
        }
    }
}//没做完
