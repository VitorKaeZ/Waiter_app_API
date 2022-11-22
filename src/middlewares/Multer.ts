import multer from 'multer'


const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, "./uploads" )
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`)
        }
    }),
})

export default upload