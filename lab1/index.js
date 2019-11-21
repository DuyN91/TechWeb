const http = require('http')
const handlesMyName = require('./handles')

const server = http.createServer(handlesMyName.serverHandle);
server.listen(8080)