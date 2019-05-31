var http = require('http'),
	fs = require('fs');
var settings = require('./settings');
var server = http.createServer();
var types = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
}

function getType(_url) {
	for (key of Object.keys(types)) {
		if (_url.endsWith(key)) {
			return types[key];
		}
	}
	return 'text/plain';
}

server.on('request',function(req,res){
	var url = __dirname + (req.url.endsWith('/') ? req.url + 'index.html' : req.url);
	fs.readFile(url,'utf-8',function(err,data){
		if (err) {
			res.writeHead(404,{'Content-Type':'text/plain'});
			res.write('not found');
			return res.end();
		}
		res.writeHead(200,{'Content-Type':getType(url)});
		res.write(data);
		res.end();
	});
});

server.listen(settings.port,settings.host);
console.log('server listening ...');