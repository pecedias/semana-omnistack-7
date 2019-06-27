const multer = require('multer');
const path = require('path'); // Configura o caminho dos arquivos em qualquer S.O

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, callback) {
            callback(null, file.originalname);
        }
    })
};
