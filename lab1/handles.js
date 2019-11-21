const url = require('url')
const qs = require('querystring')

const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'         <p>Hello World !</p>' +
'    </body>' +
'</html>'

const serverHandle = function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname 
    const params = qs.parse(route.query)

    res.writeHead(200, {'Content-Type': 'text/plain'});

    if (path === '/hello' && 'name' in params) {
        if(params['name'] === 'duy') {
            res.write('Hello ' + params['name'] + ' ECE Student')
        } else {
            res.write('Hello ' + params['name'])
        }
    } else if (path === '/') {
        res.write('Hello anonymous')
    } else {
        res.write("Error 404 page not found")
    }
    res.end();
};

module.exports = {
    serverHandle: serverHandle,
}