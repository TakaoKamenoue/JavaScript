function disp(){
	'use strict'

	let num = prompt('数字を入力してください');

	if (num === null || num === ''){
		console.warn('入力が空かキャンセルされました');
	} else if (num === '0'){
		console.log('0が入力されました');
	} else if (num.match(/^([1-9]\d*|0)$/)){
		let str;
		const ary = [];
		function* generator(from, to){ while(from <= to) yield from++; }
		let gen = generator(1, num);
		for(let num of gen) {
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
		console.warn('半角数字を入力して下さい');
	} else {
		console.error('例外エラー');
	}
};
