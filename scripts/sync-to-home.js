const { HomeDir, HomeDirBackup, HomeDirRepo } = require('./shared');

module.exports.main = function main() {
    for (const fileName of HomeDirRepo.getFileNames()){
        console.log(`Backing up ${fileName} to ${HomeDirBackup.getPath()}`)
        HomeDirBackup.writeFile(fileName, HomeDir.readFile(fileName));
    
        console.log(`Copying ${fileName} from /repo/home-files/ to home`)
        HomeDir.writeFile(fileName, HomeDirRepo.readFile(fileName))
    }
}