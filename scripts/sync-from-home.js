const { HomeDir, HomeDirRepo } = require('./shared');

module.exports.main = function main() {
    for (const fileName of HomeDirRepo.getFileNames()) {
        console.log(`Copying ${fileName} from home dir to /repo/home-files/`);
        HomeDirRepo.writeFile(fileName, HomeDir.readFile(fileName))
    }
}