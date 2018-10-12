'use strict';
function getArray(data){
    var fun = function(data){
    　　 var a = [];
        for( var i in data){
            var item = data[i];
            var obj = new Object();
            for( var j in item){
                if( j !== 'children'){
                    obj[j] = item[j];
                }
            }
            a.push(obj);
            if( item.children.length > 0 ){
                a = a.concat(fun(item.children));
            }
       }
       return a;
   }
   var list = fun(data);
   //根据id从小到大排序
   list.sort(function(a,b){
       return a.id - b.id
   })
   return list;
}
module.exports = getArray;
