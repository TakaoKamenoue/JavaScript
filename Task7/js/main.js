function disp(){
	'use strict'

	let num;
	let arr = [0,1,2,3,4,5,6,7,8,9];
	let answer;
	let cnt = 1;
	let flg = 0;	//0:正常終了(正解) 1:正常終了(不正解) 2:異常終了（処理続行） 9:エラー

	//エラー判定
	function err (num) {
		if ( num === null || num === ''){
			console.warn('入力が空かキャンセルされました。もう一度入力して下さい。');
			return 2;
		} else if (num.match(/^\d{4}$/)) {
			return 0;
		} else if (num.match(/^[0-9]*$/)) {
			console.warn('４桁の数字を入力して下さい');
			return 2;
		} else if (num !== null){
			console.error('半角数字を入力して下さい');
			return 9;
		} else {
			console.error('例外エラー');
			return 9;
		}
	}

	//重複なしのランダムな4桁の数値を取得
	function select(arr) {
		let newArr = [];
		let value;
		while ( newArr.length !== 4){
			value = (Math.floor(Math.random() * arr.length));
			newArr.push(arr[value]);
			arr.splice(value, 1);
		}
		return newArr;
	};
	answer = select(arr);

	//Hit&Blow判定
	const hb = (answer,num) => {
		flg = err(num);
		if ( flg !== 0 ) return flg;
		let hit = 0;
		let blow = 0;
		let arrcnt = 0;
		console.log('answer:'+answer+',num:'+num); // 結果出力
		for ( let elm of answer){
			if ( elm === parseInt(num.charAt(arrcnt),10)){
				hit ++;
			} else if (num.indexOf(elm) !== -1){
				blow++;
			}
			arrcnt++;
		}
		if ( hit === 4) return 0;
		console.log('外れ： '+hit+'Hits, '+blow+'Blow');
		return 1;
	};

	//メイン処理
	function main () {
		console.log('答え：'+answer);
		num = prompt('4桁の数字は？');
		console.log('4桁の数字は？');
		flg = hb(answer,num)
		if ( flg === 0 ) {
			console.log(cnt+'回で正解！');
			return;
		} else if ( flg === 1 ){
			cnt++;
			main();
		} else if ( flg === 2 ){
			main();
		} else {
			return;
		}
	};
	main();
}