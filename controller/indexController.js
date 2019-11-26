const fs = require('fs');
const path = require('path');

function readHTML (fileName) {
        let htmlFile = fs.readFileSync(path.join(__dirname, `../views/${fileName}.html`),"utf-8");
        return htmlFile;
}

const indexController = {
    devolverHome: (req,res) => {
    let html = readHTML('index');
    res.send(html);
    }
}

module.exports = indexController;