'use strict';
/**树型结构数组转化成普通数组
 * data  数组, 必填参数
 * pid  指定的父级id 值 ，可选参数
 * pidName 父级id 的名字，可选 ，默认pid
 * childrenName 转化后子集数组对象的名字，可选 默认 children
 */
function getTree(data, pid, pidName, childrenName){
	var pidName = pidName ? pidName : 'pid';
  	var childrenName = childrenName ? childrenName : 'children';
    var fun = function(pid){
          var pid = pid ? pid : 0;
          var b = [];
          for(var i in data){
              var item = data[i];
              if (item[pidName] === pid) {
                  item[childrenName] = fun(item.id);
                  b.push(item);
              }
          }
         return b;
     }
     return fun(pid);
}
module.exports = getTree;
