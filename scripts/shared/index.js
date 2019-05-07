const os = require('os');
const path = require('path');
const fs = require('fs');

const pathRepoRoot = path.join(__dirname, '..', '..');

/**
 * @param {string} filePath 
 * @param {string | undefined} fallback
 * @returns {string}
 */
function readFileSafe(filePath, fallback = '') {
    try {
        return fs.existsSync(filePath) 
            ? fs.readFileSync(filePath, 'utf8')
            : fallback;
    } catch(e) {
        return fallback;
    }
}


class HomeDir {
    /**
     * @returns {string}
     */
    static getPath() {
        return os.homedir();
    }

    /**
     * @param {string} fileName 
     * @param {string | undefined} fallback
     * @returns {string}
     */
    static readFile(fileName, fallback = '') {
        return readFileSafe(HomeDir.buildFilePath(fileName), fallback);
    }

    /**
     * @param {string} fileName 
     * @param {string} contents 
     */
    static writeFile(fileName, contents) {
        fs.writeFileSync(HomeDir.buildFilePath(fileName), contents);
    }

    /**
     * @param {string} fileName
     * @returns {string}
     */
    static buildFilePath(fileName) {
        return path.join(HomeDir.getPath(), fileName);
    }
}

class HomeDirBackup {
    /**
     * @param {string | undefined} id 
     */
    static setBackupId(id = String(Date.now())) {
        HomeDirBackup._backupId = id;
    }

    /**
     * @returns {string}
     */
    static getBackupId() {
        return HomeDirBackup._backupId;
    }

    /**
     * @returns {string}
     */
    static getPath() {
        return path.join(pathRepoRoot, 'home-files-backup', HomeDirBackup._backupId);
    }

    /**
     * @param {string} fileName 
     * @param {string | undefined} fallback
     * @returns {string}
     */
    static readFile(fileName, fallback = '') {
        return readFileSafe(HomeDirBackup.buildFilePath(fileName), fallback);
    }

    /**
     * @param {string} fileName 
     * @param {string} contents 
     */
    static writeFile(fileName, contents) {
        fs.mkdirSync(HomeDirBackup.getPath(), { recursive: true });

        fs.writeFileSync(HomeDirBackup.buildFilePath(fileName), contents);
    }

    /**
     * @param {string} fileName
     * @returns {string}
     */
    static buildFilePath(fileName) {
        return path.join(HomeDirBackup.getPath(), fileName);
    }
}

HomeDirBackup.setBackupId();

class HomeDirRepo {
    /**
     * @returns {string}
     */
    static getPath() {
        return path.join(pathRepoRoot, 'home-files');
    }

    /**
     * @returns {Array<string>}
     */
    static getFileNames() {
        return fs.readdirSync(HomeDirRepo.getPath());
    }

    /**
     * @param {string} fileName 
     * @param {string | undefined} fallback 
     * @returns {string}
     */
    static readFile(fileName, fallback = '') {
        return readFileSafe(HomeDirRepo.buildFilePath(fileName), fallback);
    }

    /**
     * @param {string} fileName 
     * @param {string} contents 
     */
    static writeFile(fileName, contents) {
        fs.writeFileSync(HomeDirRepo.buildFilePath(fileName), contents);
    }

    /**
     * @param {string} fileName
     * @returns {string}
     */
    static buildFilePath(fileName) {
        return path.join(HomeDirRepo.getPath(), fileName);
    }
}

module.exports = {
    HomeDir,
    HomeDirBackup,
    HomeDirRepo
};
