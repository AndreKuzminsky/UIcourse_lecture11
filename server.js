var http = require("http");

http.createServer(function(request, response) {
    var d = new Date();
    var today = d.toTimeString();

    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '<link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css" />' +
        '</head>' +
        '<body>' +
        '<div class="panel-group">' +
        '<div class="panel panel-info text-center">' +
        '<div class="panel-heading">' +
        '<h3>Current time:</h3>' +
        '</div>' +
        '<div class="panel-body">' +
        '<h2>' +
        today +
        '</h2>' +
        '</div>' +
        '</div>' +
        '</body>' +
        '</html>';


    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(body);
    response.end();
}).listen(8888);
