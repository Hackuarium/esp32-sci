const fs=require('fs');

const SOURCE=__dirname+'/../docs/meetings';

const dirs=fs.readdirSync(SOURCE)
    .map(item => SOURCE+'/'+item)
    .filter(item => fs.lstatSync(item).isDirectory()
);

console.log(dirs);