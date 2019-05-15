function disp(){
	'use strict'

	let num;
	let cnt = 0;
	const answer = Math.floor( Math.random() * 101 );

	//エラー判定
	function err (num) {
		if ( num === null || num === ''){
			console.warn('入力が空かキャンセルされました。もう一度入力して下さい。');	//正常終了扱い
			return true;
		} else if (parseInt(num.match(/^([1-9]\d*|0)$/),10) > 100) {
			console.log('0から100で入力して下さい');	//正常終了扱い
			return true;
		} else if (num.match(/^([1-9]\d*|0)$/)) {
			cnt++;
			return true;
		} else if (num !== null){
			console.error('半角数字を入力して下さい');
			return false;
		} else {
			console.error('例外エラー');
			return false;
		}
	}

	//Hi&Low処理
	function hilow (num) {
		if ( parseInt(num,10) > answer ){
			console.log('もっと下');
			main();
		} else if ( parseInt(num,10) < answer ) {
			console.log('もっと上');
			main();
		} else if ( parseInt(num,10) === answer ){
			console.log('正解！・・・'+cnt+'回目で当てました');
		} else {
			main();	//カウント増やさない場合の処理
		}
	}

	//メイン処理
	function main(){
		num = prompt('数字を入力してください');
		if ( err(num) === false ) return;
		hilow(num);
	};
	main();

}