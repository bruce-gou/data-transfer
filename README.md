# data-transfer
做数据处理转换

安装

npm i @qcnh1920/data-transfer

使用

import { getTree, getArray }  from '@qcnh1920/data-transfer';

<h2>API</h2>
<ol>
	<li>
		把普通数组转成树型结构数据：<a target="view_window" href="https://www.cnblogs.com/bruce-gou/p/9773438.html">示例</a>
		<h3 style="margin-left:30px">getTree(data, pid, pidName, childrenName)</h3>
		<dl>
			<dt>参数：</dt>
			<dd><strong>data</strong>: 数组列表,普通数组，标示为 pid 表示父级 id ,数据标示 id </dd>
			<dd><strong>pid</strong>: 表示父级id 的值为多少，当作顶层数据 ，选传参数，默认值： 0</dd>
			<dd><strong>pidName</strong>: 父级id 的名字，可选 ，默认pid</dd>
			<dd><strong>childrenName</strong>: 转化后子集数组对象的名字，可选 默认 children</dd>
		</dl>
	</li>
	<li>
		把树型数据再转成普通数组：<a target="view_window" href="https://www.cnblogs.com/bruce-gou/p/9773438.html">示例</a>
		<h3 style="margin-left:30px">getArray(data, childrenName, isSort, sortIdName)</h3>
		<dl>
			<dt>参数：</dt>
			<dd><strong>data</strong>: 树型结构数组，子级数组字段为 children </dd>
			<dd><strong>childrenName</strong>: 子集数组对象的名字，可选 默认 children</dd>
			<dd><strong>isSort</strong>: 布尔值 是否根据 id 大小排序，可选 默认 false</dd>
			<dd><strong>sortIdName</strong>: 排序的id 名字 ，可选 默认 id</dd>
		</dl>
	</li>
	<li>
		数组去重：<a target="view_window" href="https://www.cnblogs.com/bruce-gou/p/5237619.html">示例</a>
		<h3 style="margin-left:30px">unique(data, isField, fieldName)</h3>
		<dl>
			<dt>参数：</dt>
			<dd><strong>data</strong>: 数组, 必填参数 [1,2,3,4,4,5,5] 数据格式 </dd>
			<dd><strong>isField</strong>: 选填参数  是否数组对象指定一个字段去重,默认 false，该参数为true,fieldName则需要指定 ，isField为true data的数据格式[{id:0,name:'zs'},{id:1,name:'ls'},{id:1,name:'ls'},{id:2,name:'ww'},{id:2,name:'ww'}];</dd>
			<dd><strong>fieldName</strong>: 选填参数  根据某个字段去重，的字段名，isField 为true 时，必填</dd>
		</dl>
	</li>
</ol>
