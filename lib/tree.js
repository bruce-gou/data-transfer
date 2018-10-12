'use strict';
function getTree(list, pid){
    var fun = function(pid){
          var pid = pid ? pid : 0;
          var b = [];
          for(var i in list){
              var item = list[i];
              if (item.pid === pid) {
                  item.children = fun(item.id);
                  b.push(item);
              }
          }
         return b;
     }
     return fun(pid);
}
module.exports = getTree;
