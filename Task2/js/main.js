function disp(){
	'use strict'

	const str = prompt('文字列を入力してください');

	if ( str === null || str === ''){
		console.warn('入力が空かキャンセルされました');
		return;
	}
	const ary = str.split(/\s+/);

	function count(ary){
		let check = {};
		for(let key of ary){
			if ( key !== '' ){
				check[key] = ary.filter(function(word){return word===key}).length;
			}
		}
		return check;
	}
	console.log(count(ary));
};
