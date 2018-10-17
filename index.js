'use strict';

var getArray = require('./lib/array'); //普通数组转换成树型结构数组
var getTree = require('./lib/tree');//树型结构数组转化成普通数组
var unique = require('./lib/unique');//数组去重

module.exports = {
  getArray: getArray,
  getTree: getTree,
  unique: unique
};
