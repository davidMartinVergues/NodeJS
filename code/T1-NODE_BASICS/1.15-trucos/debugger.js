const http = require("http");

const router = (req, res) => {
    console.log("nueva peticion");

    switch (req.url) {
        case "/hola":
            res.writeHead(201, { "content-type": "text/plain; charset=utf-8" });
            res.write("hello from node! ");
            res.end();
            break;
        default:
            res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
            res.write("no sé qué quieres");
            res.end();
            break;
    }
};


const port = 3000,
    server = http.createServer(router).listen(port);

console.log(`escuchando en el ${port}`);
