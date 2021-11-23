const fs = require('fs');

const db = require('../models');
const Image = db.Image;

module.exports = {
    uploadFiles: async function(req, res) {
        try {
            console.log(req.file, 'file info');

            if (req.file == undefined) {
                return res.send('You must select a file.');
            };

            // save Image object in database
            Image.create({
                type: req.file.mimetype,
                name: req.file.originalname,
                data: fs.readFileSync(
                    req.file.destination + req.file.filename
                ),
            // if successful write data to tmp folder
            }).then(image => {
                fs.writeFileSync(
                    './assets/tmp/' + image.name,
                    image.data
                );

                return res.redirect('http://localhost:3000/profile');
            });
        } catch (err) {
            console.log(err, 'err');
            return res.send(`Error when trying upload images: ${err}`);
        }
    }
};