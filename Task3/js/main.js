function disp(){
	'use strict'

	const win = [-1,2];
	const lose = [1,-2];
	let flg = 0;	//0:あいこ 1:決着
	const rps = ['グー','チョキ','パー'];

	try {
		do {
			console.log('「じゃんけん・・・」');
			let hum = prompt('「じゃんけん・・・」','0.グー 1.チョキ 2.パー');

			if (hum === null) {
				console.warn('入力が空かキャンセルされました');
				break;
			} else if (!(hum in rps)) {
				throw new Error('0,1,2で入力して下さい');
			}

			let cpu = Math.floor(Math.random() * rps.length);	
			console.log('「ぽい！」');
			console.log('*コンピューター：'+rps[cpu]);
			console.log('*あなた：'+rps[hum]);

			if (win.includes(hum - cpu)){
				console.log('「あなたの勝ち！」');
				flg = 1;
			} else if (lose.includes(hum - cpu)){
				console.log('「あなたの負け・・・」');
				flg = 1;
			} else {
				console.log('アイコでしょ！');
			}
		} while (flg === 0);
	} catch (e) {
		console.error( e.message );
	}
};
