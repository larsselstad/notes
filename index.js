const fs = require('fs');
const marked = require('marked');

const startFileStr = fs.readFileSync('./src/start.md', 'utf8');

fs.writeFile('./public/index.html', marked(startFileStr), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
