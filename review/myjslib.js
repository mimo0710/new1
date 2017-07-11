/**���¡
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

/**ȥ����λ�ո�
 *
 */
 function trim(str){
    return str.replace(/^\s+|\s+$/g,"")
}

/**���ҷ���clsaaName��Ԫ��
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

/**��ȡ��ǰԪ����ʽ
 * @param elem
 * @param attr
 * @return {*}
 */
function getStyle(elem,attr){
    //�������
    if(elem.currentStyle){             //IE
        return elem.currentStyle[attr];
    }else if(window.getComputedStyle){      //��׼�����
        return getComputedStyle(elem,false)[attr];
    }else{
        return elem.style[attr];
    }
}
/**
 * ��js��div��ʽ
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
}//û����
