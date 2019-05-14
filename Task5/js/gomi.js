	let pivot = descend[0];
	let aryQuick = descend;
	console.log('aryQuick：'+aryQuick);
		
	const quick = (aryQuick) => {
		const firstPivot = aryQuick[0];
		pivot = aryQuick[0];
		console.log('基準値：'+pivot);
		console.log('開始時低い：'+splitLow);
		console.log('開始時高い：'+splitHigh);
		console.log('aryQuick：'+aryQuick);
		
		splitLow = [];
		splitHigh = [];
		for ( judge of aryQuick) {
			if ( pivot > judge ){
				splitLow.push(judge);
				console.log('低い判定：'+judge);
			} else if ( pivot < judge ) {
				splitHigh.push(judge);
				console.log('高い判定：'+judge);
			}
			console.log('低い：'+splitLow);
			console.log('高い：'+splitHigh);
		};
		if ( pivot > splitLow[0]) {
			splitLow.push(pivot);
			quick(splitLow);
		}
		if ( pivot < splitHigh[0]) {
			quick(splitHigh);
			splitHigh.push(pivot);
		}
		splitLow.push(firstPivot);
		descend = splitLow.concat(splitHigh);
		console.log('小さい順：'+descend);
	};
	quick(aryQuick);
	
function quick(arr) {
  if (arr.length === 0) return []
  const [pivot, ...tail] = arr
  return [...quick(tail.filter( x => x <= pivot )),  pivot , ...quick(tail.filter( x => x > pivot ))]
}


  if (arr.length === 0) return;
  console.log('testauick開始のpivot：'+pivot);
  console.log('testauick開始のother：'+other);
  let lowQuick = {...testquick(other.filter(elm => elm <= pivot ))};
    
  let highQuick = testquick(other.filter(elm => elm > pivot ));
  
return [lowQuick,pivot,highQuick];
}

	descend = testquick(ary);
	console.log(typeof descend);
	console.log('test小さい順：'+descend);
	

	let pivot = descend[0];
	let aryQuick = descend;
		
	const quick = (...aryQuick) => {
		const firstPivot = aryQuick[0];
		pivot = aryQuick[0];
		console.log('基準値：'+pivot);
		console.log('開始時低い：'+splitLow);
		console.log('開始時高い：'+splitHigh);
		console.log(aryQuick[0]);
		
		splitLow = [];
		splitHigh = [];
		for ( judge of aryQuick) {
			if ( pivot > judge ){
				splitLow.push(judge);
				console.log('低い判定：'+judge);
			} else if ( pivot < judge ) {
				splitHigh.push(judge);
				console.log('高い判定：'+judge);
			}
			console.log('低い：'+splitLow);
			console.log('高い：'+splitHigh);
		};
		if ( pivot > splitLow[0]) {
			splitLow.push(pivot);
			quick(splitLow);
		}
		if ( pivot < splitHigh[0]) {
			quick(splitHigh);
			splitHigh.push(pivot);
		}
		splitLow.push(firstPivot);
		descend = splitLow.concat(splitHigh);
		console.log('小さい順：'+descend);
	};

	descend = quick(ary);
	console.log('小さい順：'+descend);


	//小さい順(クイックソート)(動くやつ）
	const OldquickSort = sortAry => {
	console.log('ブレイクポイント１'+','+sortAry);
		(function sort(from, to){
	console.log('ブレイクポイント2'+','+from+','+to);
			//再帰出口;
			if(from >= to) {
				return;
			}
			let low = from;
			let high = to;
			var pivot = sortAry[Math.floor((from + to)/2)];
			//左から値を見ていく;
			//最終的にlowとhighは同じindexになるか交差する;
			//交差した場合はlow > highになる;
			while(low < high) {
	console.log('ブレイクポイント3'+','+'low:'+low+','+'to:'+to+','+'high:'+high+','+'pivot:'+pivot);
				if(sortAry[low] >= pivot) {
					while(high > low) {
	console.log('ブレイクポイント4'+','+'low:'+low+','+'high:'+high+','+'pivot:'+pivot);
						if(sortAry[high] <= pivot) {
	console.log('ブレイクポイント5');
							let tmp = sortAry[low];
							sortAry[low] = sortAry[high];
							sortAry[high] = tmp;
							high--;
							break;
						}
						high--;
					}
				}
				low++;
			};
			if(sortAry[high] > pivot) {
	console.log('ブレイクポイント6');
				sort(from, high - 1);
				sort(high, to);
			}else if(sortAry[high] < pivot) {
	console.log('ブレイクポイント7');
				sort(from, high);
				sort(high + 1, to);
			}else {
	console.log('ブレイクポイント8');
				//sortAry[high]がpivotと同じ値の時の処理;
				sort(from, high - 1);
				sort(high + 1, to);
			}
		})(0, sortAry.length - 1);
	console.log('ブレイクポイント9');
		return sortAry;
	}	
