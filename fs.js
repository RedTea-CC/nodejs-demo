const fs = require('fs');
const path = require('path');

// 函数：查看对应路径的文件或者文件夹的大小
function getSize(path) {
    const stats = fs.statSync(path);
    if (stats.isFile()) {
        return stats.size;
    } else if (stats.isDirectory()) {
        let totalSize = 0;
        const files = fs.readdirSync(path);
        files.forEach(file => {
            totalSize += getSize(`${path}/${file}`);
        });
        return totalSize;
    }
}

const targetPath = path.resolve(__dirname);
console.log("target_path:", targetPath);
let size = getSize(targetPath);

console.log(size);
