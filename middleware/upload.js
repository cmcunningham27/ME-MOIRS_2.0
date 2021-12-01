const multer = require('multer');

// filter that only allows images to pass
// const imageFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith('image')) {
//         cb(null, true);
//     } else {
//         cb('Please upload only images.', false);
//     }
// };

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './client/src/assets/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

let upload = multer({ storage: storage });
module.exports = upload;