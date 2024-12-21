//http is core Node.js module for creating HTTP servers.
const http=require('http');

const app=require('./app');

const server=http.createServer(app);

port=process.env.PORT || 3000

server.listen(port,()=>{
    console.log(`Server run on port ${port}`)
});