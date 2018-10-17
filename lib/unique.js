'use strict';
/**
 * 数组去重 
 * data  数组, 必填参数 [1,2,3,4,4,5,5] 数据格式
 * isField 选填参数  是否数组对象指定一个字段去重,默认 false，该参数传了fieldName则需要指定 ，isField为true data的数据格式[{id:0,name:'zs'},{id:1,name:'ls'},{id:1,name:'ls'},{id:2,name:'ww'},{id:2,name:'ww'}];
 * fieldName 选填参数  根据某个字段去重，的字段名，isField 为true 时，必填
 */
var unique = function(data, isField, fieldName) {  
	var hashTable = {};
	var list = [];
	if ( isField === true &&  !fieldName ) {
		console.error('请指定根据字段去重的字段名,及第三个参数!');
		return;
	}
	if ( isField === true && fieldName ) {
		for(var i in data) {
			if (!hashTable[data[i][fieldName]]) {
				hashTable[data[i][fieldName]] = true;
				list.push(data[i]);
			}
		}
	}else{
		for(var i in data) {
			if(!hashTable[data[i]]) {
				hashTable[data[i]] = true;
				list.push(data[i]);
			}
		}
	}
	return list;
}
module.exports = unique;  
