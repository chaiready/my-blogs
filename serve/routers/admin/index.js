module.exports = app => {
    const express = require("express")
    const router = express.Router({
        mergeParams: true
    })
    const Blogs = require("../../modules/blogs.js")
    router.post('/admin/blogs', async(req,res) => {
        let model = await Blogs.create(req.body)
        console.log("12",model)
        res.send(model)
    })
    router.get('/admin/blogs', async (req,res) => {
        let model = await Blogs.find()
        res.send(model)
    })
    router.get('/admin/blogs/:id', async (req,res) => {
        let model = await Blogs.findById(req.params.id)
        console.log("21",model)
        res.send(model)
    })
    router.delete('/admin/blogs/:id', async (req,res) => {
        let model = await Blogs.findByIdAndDelete(req.params.id)
        console.log("25",model)
        res.send(model)
    })
    router.put('/admin/blogs/:id', async (req,res) => {
        let model = await Blogs.findByIdAndUpdate(req.params.id,req.body)
        console.log("31",model)
        res.send(model)
    })
    const multer = require('multer')
    const MAO = require('multer-aliyun-oss');
    const upload = multer({
        // dest: __dirname + '/../../uploads'
        storage: MAO({
            config: {
                region: 'oss-cn-hongkong',
                accessKeyId: 'LTAI4FsQdq9xyHKhjkb4HQQA',
                accessKeySecret: 'GaRlJ8icgxtqzgRwQDMFs6qFb15DWK',
                bucket: 'coco727'
            }
        })
    })
    router.post('/admin/upload', upload.single('file'), async (req,res) => {
        let file = req.file
        // file.url = `http://www.coco727.com/uploads/${file.filename}`
        res.send(file)
    })
    app.use(router)
}
