const http = require('http')

const PORT = process.env.PORT || '3000'
//create a server object:
http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Hello World!-ache') //write a response to the client
    res.end() //end the response
  })
  .listen(PORT, () => console.log(PORT))
//the server object listens on port 8080
