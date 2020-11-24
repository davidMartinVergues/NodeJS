const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Web</title></head>");
    res.write(
      "<body><h1>Enter massage</h1> <form action='/message' method='POST'> <input name='message' type='text'></input> <button type='submit'>Click Me!</button> </form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk_of_data) => {
      body.push(chunk_of_data);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Web</title></head>");
  res.write("<body><h1>hello world</h1> </body>");
  res.write("</html>");
  res.end();
};

// module.exports = {
//   handle: requestHandler,
//   someText: "hello world!",
// };

module.exports = {
  handle: requestHandler,
  text: "hello world",
};
