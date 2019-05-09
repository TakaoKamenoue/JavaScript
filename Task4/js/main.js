function disp(){
	'use strict'

	let inNum = prompt('数字を入力してください');
	let outNum = 0;

	//再帰処理
	const loop = inNum => {
		let lpNum = parseInt(inNum,10);
		if (lpNum !== 0){
			outNum += lpNum;
		return loop(lpNum - 1);
		} else {
			return 1;
		}
	};

	//メイン処理
	if ( inNum === null || inNum === ''){
		console.warn('入力が空かキャンセルされました');
	} else if (inNum.match(/^([1-9]\d*|0)$/)){
		loop(inNum);
		console.log(outNum);
	} else if (inNum !== null){
		console.warn('半角数字を入力して下さい');
	} else {
		console.error('例外エラー');
	}
};
