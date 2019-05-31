function disp(){
	'use strict'

	const ary = [20, 31, 42, 13, 5, 38];
	console.log('定数：'+ary)

	//変数宣言と初期化
	let sum = 0;
	let ave = 0;
	let ascend = ary;
	let descend;
	let max;
	let min;
	let cnt;
	let flg;
	let judge;

	//合計
	ary.forEach(function(elm) {
		sum += elm;
	});
	console.log('合計：'+sum);

	//平均
	let half = ary.map(elm => elm / 2);
	half.forEach(function(elm) {
		ave += elm;
	});
	console.log('平均：'+ave);

	//最大値
	for(judge of ary){
		if ( typeof ary.find(elm => elm > judge) ===  'undefined'){
			max = judge;
			break;
		}
	}
	console.log('最大：'+max);

	//最小値
	for(judge of ary){
		if ( typeof ary.find(elm => elm < judge) ===  'undefined'){
			min = judge;
			break;
		}
	}
	console.log('最小：'+min);

	//小さい順(クイックソート)
	function quick(ary) {
		if (ary.length === 0 ) return[];
		const [pivot, ...other] = ary;
		return [...quick(other.filter( elm => elm <= pivot )),  pivot , ...quick(other.filter( elm => elm > pivot ))];
	};
	descend = quick(ary);
	console.log('小さい順：'+descend);
	

	//大きい順(バブルソート)
	do {
		cnt = 0;
		flg = 0;
		for(judge of ascend) {
			cnt ++;
			for (let bbl of ascend) {
				//小さかったら交換（大きい順）
				if(ascend[cnt-1] < ascend[cnt]){
					bbl = ascend[cnt];
					ascend[cnt] = ascend[cnt-1];
					ascend[cnt-1] = bbl;
					flg = 1;
				}
			}
		}
	} while ( flg === 1);
	console.log('大きい順：'+ascend);
};