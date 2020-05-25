var fs = require('fs');
var path = require('path');
const removeMd = require('remove-markdown');
const jsStringEscape = require('js-string-escape')

function updateHeaderContent(folder) {
    fs.readdir(folder, (err, files) => {
        files.forEach(fileName => {
            if (fs.statSync(folder +'/'+ fileName).isDirectory()) {
                return updateHeaderContent(folder +'/'+ fileName);
            }
            if (path.extname(folder +'/'+ fileName) !== '.md') {
                return;
            }

            fs.readFile(folder +'/'+ fileName, 'utf8', function(er, contents){
                const headerLengh = contents.indexOf('\n');
                var headerTitle = contents.slice(0, headerLengh);
                
                fs.open(folder +'/'+ fileName, 'w', function(err, fd){
                    if (err) {
                        throw 'could not open file: ' + fileName;
                    }
                
                    const header = Buffer.from('---\ntitle: "'+jsStringEscape(removeMd(headerTitle))+'"\n---\n\n' + contents);
                    fs.write(fd, header, 0, header.length, null, function(e) {
                        if (e) throw 'can not write file: ' + fileName;
                        
                        fs.close(fd, () => {});
                    });
                });
            
            });
        });
    });
}

function run(path) {
    updateHeaderContent(path);
}

var args = process.argv.slice(2);
if (args && args.length > 0) {
    console.log(args);
    run(args[0]);
} else {
    run('./');
}
