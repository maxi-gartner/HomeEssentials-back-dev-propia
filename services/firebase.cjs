let admin = require("firebase-admin")

const bucket = admin.storage().bucket()

const uploadPhoto = async (req, res, next) => {

  if (!req.file) return next();

  const photo = req.file
  const nameFile = Date.now() + "." + photo.originalname.split('.').pop();

  const file = bucket.file(nameFile);

  const stream = file.createWriteStream({
    metadata: {
      contentType: photo.mimetype
    }
  });

  stream.on("error", (e) => {
    console.error(e);
  });
  stream.on("finish", async () => {
    await file.makePublic();
    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nameFile}`;
    req.body.photo = req.file.firebaseUrl
    next();
  });
  stream.end(photo.buffer);
};

const uploadLogo = async (req, res, next) => {

  console.log(req.file)
  if (!req.file) return next();

  const logo = req.file
  const nameFile = Date.now() + "." + logo.originalname.split('.').pop();

  const file = bucket.file(nameFile);

  const stream = file.createWriteStream({
    metadata: {
      contentType: logo.mimetype
    }
  });

  stream.on("error", (e) => {
    console.error(e);
  });
  stream.on("finish", async () => {
    await file.makePublic();
    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nameFile}`;
    req.body.logo = req.file.firebaseUrl
    next();
  });
  stream.end(logo.buffer);
};

const uploadImage = async (req, res, next) => {

  //console.log(req.file)
  if (!req.file) return next();

  const cover_photo = req.file
  const nameFile = Date.now() + "." + cover_photo.originalname.split('.').pop();

  const file = bucket.file(nameFile);

  const stream = file.createWriteStream({
    metadata: {
      contentType: cover_photo.mimetype
    }
  });

  stream.on("error", (e) => {
    console.error(e);
  });
  stream.on("finish", async () => {
    await file.makePublic();
    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nameFile}`;
    req.body.cover_photo = req.file.firebaseUrl
    next();
  });
  stream.end(cover_photo.buffer);
};

const uploadImg = { uploadImage, uploadPhoto, uploadLogo }
module.exports = uploadImg;
