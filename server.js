const e = require("express");
const path = require('path');
const server = e()
const host = 'localhost'
const port = 8080



server.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/index.html'));
})

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});