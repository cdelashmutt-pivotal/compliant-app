var http = require("http");

http.createServer(function(request, response) {
  if(/^\/v2\/catalog/.test(request.url))
    result = {"services":{}}
  else
    result = {}

  response.writeHead(200, {"Content-Type": "application/json"});
  response.write(JSON.stringify(result));
  response.end();
}).listen(process.env.VCAP_APP_PORT || 8888);
