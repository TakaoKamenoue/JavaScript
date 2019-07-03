function disp(){
	'use strict'
	
	const before = /foo/g;
	const after = 'uryyyy!!';
	const key = 'text';

	let hash = {"main" : {
			"first" : { "text" : "foobar" },
			"second" : { "text" : "fizzbuzz", "child" : { "text" : "foobar" } }
			},
			"sub" : {
			"first" : { "text" : "fizzbuzz", "child" : { "text" : "foobar" } },
			"second" : {
			"third" : { "text" : "barfoo", "child" : { "text" : "foobar" } },
			"forth" : { "child" : { "text" : "jit_foo_foo" } }
			}
			},
			"text" : "foofava"
	}

	//置換処理
	let replace = function(hash) {
		Object.keys(hash).forEach( key => {
			if (typeof hash[key] == 'object') {
				replace(hash[key]);
			} else if (typeof hash[key] == 'string' && hash[key].indexOf('foo') != -1) {
				hash[key] = hash[key].replace(before, after);
			};
		});
	};
	replace(hash);
	console.log(JSON.stringify(hash, null,' '));
}