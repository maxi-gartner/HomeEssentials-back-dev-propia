require('dotenv').config();
let admin = require("firebase-admin")

const serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
};

const BUCKET = process.env.FIREBASE_STORAGE_BUCKET;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

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
