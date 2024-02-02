const fs = require('fs').promises; // Calls the FS module
const { read } = require('fs');
// ".promisses" allows the use of promisses, to it wait until the the response.
const path = require('path'); // Calls the path module.
// will enable work with path files.

// fs.readdir(path.resolve(__dirname)) // will list the folder.
//     .then(files => console.log(files))
//     .catch(e => console.log(e));

async function readdir(rootDir){
    try{
        rootDir = rootDir || path.resolve(__dirname); // If the function does not send any path, it takes the current folder

        const files = await fs.readdir(rootDir);

        walk(files, rootDir);
    } catch(error){
        console.log(error);
    }
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file) // root directory and the file name.
        const stats = await fs.stat(fileFullPath); // check if the file is a directory

        if (/\.git/g.test(fileFullPath)) continue; // uses a regular expression to check for a file that contains ".git".
        if (/\node_modules/g.test(fileFullPath)) continue; // uses a regular expression to check for a file that contains "node_modules".


        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }

        if (!/\.js$/g.test(fileFullPath)) continue; // uses a regular expression to get just js files.

        console.log(`${fileFullPath} || ${file} || ${stats.isDirectory()}`); //give the path of the file, give the file and check if it is a directory.
    }
}

readdir('/Users/diogo/OneDrive/Documentos/JavaScript/Udemy/NodeJS/node');