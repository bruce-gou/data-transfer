'use strict';
/**普通数组转换成树型结构数组
 * data  树型解构数据数组, 必填参数
 * childrenName 子集数组对象的名字，可选 默认 children
 * isSort 布尔值 是否根据 id 大小排序，可选 默认 false
 * sortIdName 排序的id 名字 ，可选 默认 id
 */
function getArray(data, childrenName, isSort, sortIdName){
	var childrenName = childrenName ? childrenName : 'children';
	var sortIdName = sortIdName ? sortIdName: 'id';
    var fun = function(data){
    　　 var a = [];
        for( var i in data){
            var item = data[i];
            var obj = new Object();
            for( var j in item){
                if( j !== childrenName){
                    obj[j] = item[j];
                }
            }
            a.push(obj);
            if( item[childrenName].length > 0 ){
                a = a.concat(fun(item[childrenName]));
            }
       }
       return a;
   }
   var list = fun(data);
   if (isSort === true) {
   		//根据id从小到大排序
	   list.sort(function(a,b){
	       return a[sortIdName] - b[sortIdName]
	   })
   }
   return list;
}
module.exports = getArray;
