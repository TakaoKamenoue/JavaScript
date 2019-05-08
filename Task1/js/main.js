function disp(){
	'use strict'

	var num = prompt('数字を入力してください');

	if ( num === null || num === ''){
		console.log('入力が空かキャンセルされました');
	} else if (num.match(/^[1-9][0-9]+$/)){
		var str;
		var ary = new Array();
		function* generator(from, to){ while(from <= to) yield from++; }
		var gen = generator(1, num);
		for(num of gen) {
			if (num%3 === 0 && num%5 === 0) {
				str = 'FizzBuzz';
			} else if (num%3 === 0){
				str = 'Fizz';
			} else if (num%5 === 0){
				str = 'Buzz';
			} else {
				str = num;
			}  
			ary.push(str);
		}
		str = ary.join(',');
		console.log(str);
	} else if (num !== null){
		console.log('半角英数字を入力して下さい');
	} else {
		console.log('例外エラー');
	}
};
