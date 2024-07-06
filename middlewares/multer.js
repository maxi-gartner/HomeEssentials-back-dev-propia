import multer from "multer";

const Multer = multer({
    storage: multer.memoryStorage(),
    limits: 10240 * 10240,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
            cb(null, true);
        } else {
            cb(new Error('Only PNG y JPEG.'));
        }
    }
})

export default Multer