const http = require('http');
const url = require('url');

const root = require('./modules/root_module');
const about = require('./modules/about_module');
const contact = require('./modules/contact_module');
const gallery = require('./modules/gallery_module');
const not_found = require('./modules/not_found_module');
const footer = require('./modules/footer_module');

const name = "Aira Rosal";

const server = http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;

    res.writeHead(200, {'Content-Type': 'text/html'});

    let content = "";
    if (path === "/") {
        content = root(name);
    } else if (path === "/about") {
        content = about(name);
    } else if (path === "/contact") {
        content = contact(name);
    } else if (path === "/gallery") {
        content = gallery(name);
    } else {
        content = not_found();
    }

    res.write(content);
    res.write(footer(name));
    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
    console.log(about(name)); // Changed from aboutMessage(name)
});