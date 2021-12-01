const fs = require('fs');

const db = require('../models');
const Image = db.Image;

module.exports = {
    uploadFiles: async function(req, res) {
        console.log(req.params.id, 'is the id here?');
        try {
            console.log(req.file, 'is this the req files data before creating');

            if (req.file == undefined) {
                return res.send('You must select a file.');
            };
            console.log(req.file.destination, req.file.filename, 'what is here?')
            // save Image object in database
            Image.create({
                type: req.file.mimetype,
                name: req.file.originalname,
                data: req.file.path,
                user_id: req.params.id,
            // if successful write data to tmp folder
            }).then(image => {
                fs.writeFileSync(
                    './client/src/assets/tmp/' + image.name,
                    image.data
                );
                return res.redirect('http://localhost:3000/profile');
            }).catch(err => {
                console.log(err);
                res.redirect('http://localhost:3000/profile');
            });
        } catch (err) {
            console.log(err);
            return res.redirect('http://localhost:3000/profile');
        }
    }
};