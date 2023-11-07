const http = require("http");

const dotenv = require("dotenv");
dotenv.config();

let port = +process.env.PORT;

const content = process.env.TEXT;

const sentences = [
    "L'unica persona che può limitare il tuo successo sei tu stesso.",
    "Il fallimento è solo l'opportunità di iniziare di nuovo in modo più intelligente.",
    "Il successo è camminare da un fallimento all'altro senza perdere entusiasmo.",
    "Credi in te stesso e sarai inarrestabile.",
    "Le grandi cose non vengono mai da zone di comfort."
];

function getRandomSentence(sentences) {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

function htmlResponse(res, content) {
    const randomSentence = getRandomSentence(sentences);
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<h1>${content}</h1><h2>${randomSentence}</h2>`);
}

const server = http.createServer(function (req, res) {
    htmlResponse(res, content);
});


server.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
});

