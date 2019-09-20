const { createServer } = require("http");
const { createReadStream } = require("fs");
const { decode} = require("querystring");

const sendFile = (response, status, type, filePath) =>{
    response.writeHead(status, {"Content-type": type });
    createReadStream(filePath).pipe(response);
};

createServer((request, result) => {
    if (request.method === "POST"){
        let body = "";
        request.on("data", data =>{
            body += data;
        });
        request.on("end", () =>
        {const { name, email, message } = decode(body);
        console.log(`${name} (${email}): ${message}`);
    });
}
    switch (request.url) {
        case "/":
            return sendFile(result, 200, "text/html", "./Lektion1.html");
        case "/img_2.jpg":
            return sendFile(result, 200, "image/jpeg", "./img_2.jpg");
            case "/contact":
                return sendFile(result, 200, "text/html", "./contact.html");
        default:

}
}).listen(3000);

console.log("Jonathan' personal website running on port 3000");