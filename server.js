const http = require("http");

const dotenv = require("dotenv");
dotenv.config();

let port = +process.env.PORT;
console.log(port);
let content = process.env.TEXT;


function htmlResponse(res, content) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>${content}</h1>`);
}


const server = http.createServer(function (req, res) {
    htmlResponse(res, content);

});


server.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
});

