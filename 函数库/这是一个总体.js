/**
 * js选择器
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


/**
 * 获取当前元素样式
 * @param elem
 * @param attr
 * @return {*}
 */
function getStle(elem, attr){
    if(elem.currentStyle){
        return elem.currentStyle[attr];
    }else if(elem.getComputedStyle){
        return elem.getComputedStyle(elem, false)[attr];
    }else{
        return elem.style[attr];
    }
}


/**
 * 用js给elem对象添加attr属性
 * @param elem 对象                           eg：div标签
 * @param attr 属性                           eg：width
 * @param value 属性所对应的值                eg:200px
 * @returns {*}
 */
function css(elem,attr,value){
    if(value){
        elem.style[attr] = value;
    }else{
        if(typeof attr ==="string"){
            return getStle(elem,attr);
        }else{
            for(var p in attr){
                switch(p){
                    case 'width':
                    case 'height':
                    case 'padding':
                    case 'paddingLeft':
                    case 'paddingRight':
                    case 'paddingTop':
                    case 'paddingBottom':
                        value = /\%/.test[attr[p]]?attr[p]:Math.max(parseInt(attr[p]),0)+'px';
                        break;
                    case 'left':
                    case 'top':
                    case 'bottom':
                    case 'right':
                    case 'margin':
                    case 'marginLeft':
                    case 'marginRight':
                    case 'marginTop':
                    case 'marginBottom':
                        value = /\%/.test(attr[p])?attr[p]:parseInt(attr[p])+'px';
                        break;
                    default :
                        value = attr[p];
                }
                elem.style[p] = value;
            }
        }
    }
}



/**
 * 给指定对象添加方法
 * @param elem 对象
 * @param type 种类
 * @param fn   方法
 */
function addEvent(elem, type,fn){
    if(elem.addEventListener){
        elem.addEventListener(type,fn,false)
    }else if(elem.attachEvent){
        elem[type+fn] = function(){
            fn.call(elem);
        }
        elem.attachEvent("on"+type,elem[type+fn]);
    }else{
        elem["on"+type] = fn;
    }
}


/**
 * 给指定对象删除方法
 * @param elem
 * @param type
 * @param fn
 */
function removeEvent(elem,type,fn){
    if(elem.removeEventListener){
        elem.removeEventListener(type,fn,false);
    }else if(elem.detachEvent){
        elem.detachEvent("on"+type, elem[type+fn])
    }else{
        elem["on"+type] = null;
    }
}

/**
 * 返回指定的元素的下一个元素兄弟
 * @param elem
 * @return 指定的元素的下一个元素兄弟
 */
function next(elem){
    do{
        elem = elem && elem.nextSibling;     //nextSibling 返回下个节点，在相同的树层级中。被返回的节点以 Node 对象返回。
                                            //注释：如果没有 nextSibling 节点，则返回值为 null。
    }while(elem && elem.nodeType != 1);     //nodeType 属性返回以数字值返回指定节点的节点类型。1元素节点2属性节点
    return elem;
}

/**
 * 返回指定的元素的前一个元素兄弟
 * @param elem
 * @return 指定的元素的前一个元素兄弟
 */
function prev(elem){
    do{
        elem = elem && elem.previousSibling;
    }while(elem&&elem.nodeType != 1)
    return elem;
}

/**
 * 查找指定元素的第一个孩子节点
 * @param elem
 */
function first(elem){
    elem = elem.firstChild;
    return elem && elem.nodeType == 1 ? elem :next(elem);
}

/**
 * 查找指定元素的最后一个孩子节点
 * @param elem
 */
function last(elem){
    elem = elem.lastChild;
    return elem && elem.nodeType == 1?elem:prev(elem);
}

/**
 * 在给定的当前元素的前面插入一个新元素
 * @param elem
 */
function before(elem,newNode){
    elem.parentNode.insertBefore(newNode,elem);
}

/**
 * 在给定的当前元素的后面面插入一个新元素
 * @param elem
 * @param newNode
 */
function after(elem,newNode){
    if(elem.nextSibling){
        before(elem.nextSibling, newNode);
    }else{
        elem.parentNode.appendChild(newNode);
    }
}

/**
 * 删除给定的元素
 * @param elem
 */

function remove(elem){
    elem.parentNode.removeChild(elem);
}
/**
 * 寻找所有除自己外的兄弟
 * @param elem
 */
function siblings(elem){
    var arr = [];
    var elements = elem.parentNode.children;
    for(i=0;i<elements.length;i++){
        if(elements[i]!=elem){
            arr.push(elements[i]);
        }
    }
    return arr;
}

/**
 * 深克隆
 * @param obj
 * @returns {{}}
 */
function cloneObj(obj){
    var newObj = {};
    for(var p in obj){
        if(typeof obj[p] === "object"){
            0
            newObj[p] = arguments.callee(obj[p]);
        }else{
            newObj[p]=obj[p]
        }
    }
    return newObj;
}

/**
 * 添加对象
 * @param target 被合并的目标对象
 * @param obj  要合并的对象
 * @returns {*} 返回合并的新对象
 */
function extend(target,obj){
    for(var p in obj){
        if(typeof obj[p] === "object"){
            target[p] = cloneObj(obj[p])
        }else{
            target[p]=obj[p];
        }
    }
    return target;
}


/**
 * 去除字符串首位空格
 * @param str
 * @returns {string|void|XML}
 */
function trim(str){
    return str.replace(/^\s+|\s+$/g,'');
}
