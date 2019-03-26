const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer'); //<---- Repasa qué es multer y cómo funciona.

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET //<---- Acuérdate de añadirlo en el env.
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'miPrograma',
  allowFormats: ['jpg', 'png'],
  filename: (req, file, next) => {
    next(null, `${Date.now()}${file.originalname}`)
  }
})

module.exports = multer({ storage });

