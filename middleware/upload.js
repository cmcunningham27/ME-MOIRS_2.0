const multer = require('multer');

// filter that only allows images to pass
const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb('Please upload only images.', false);
    }
};

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + '/assets/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

let uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;