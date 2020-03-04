module.exports = app => {
  const express = require("express")
  const router = express.Router({
    mergeParams: true
  })
  const Blogs = require("../../modules/blogs")
  const Comments = require("../../modules/comments")
  const Users = require("../../modules/users")
  const Messages = require("../../modules/messages")
  const Friends = require("../../modules/friends")

  router.post('/web/blogs', async (req, res) => {
    let model = await Blogs.create(req.body)
    console.log("12", model)
    res.send(model)
  })
  router.get('/web/blogs/:pageNum/:pageSize', async (req, res) => {
    let model = {}
    let skip = (req.params.pageNum - 1) * req.params.pageSize
    model.total = await Blogs.count()
    model.rows = await Blogs.find({},{},
      // {
      //   sort: {
      //     createdAt: -1, //倒序 desc
      //   },
      //   skip: skip,//page : 当前页码, pageSize 每页显示条数
      //   limit: Number(req.params.pageSize)
      // }
    ).skip(skip).sort({createdAt: -1,}).limit(Number(req.params.pageSize))
    res.send(model)
  })
  router.get('/web/blogs/:id', async (req, res) => {
    let model = await Blogs.findById(req.params.id)
    await Blogs.update({_id : req.params.id}, {$inc : {views : 1}})
    console.log("21", model)
    res.send(model)
  })
  router.delete('/web/blogs/:id', async (req, res) => {
    let model = await Blogs.findByIdAndDelete(req.params.id)
    console.log("25", model)
    res.send(model)
  })
  router.put('/web/blogs/:id', async (req, res) => {
    let model = await Blogs.findByIdAndUpdate(req.params.id, req.body)
    console.log("31", model)
    res.send(model)
  })
  router.put('/web/blogs/likes/:id', async (req, res) => {
    let model = await Blogs.findByIdAndUpdate(req.params.id, 
      // { likes: req.body.likes },
      {$inc : {likes : 1}}
    )
    console.log("31", model)
    res.send(model)
  })
  router.post('/web/users', async (req, res) => {
    let model = await Users.create(req.body)
    console.log("12", model)
    res.send(model)
  })
  router.get('/web/users', async (req, res) => {
    let model = await Users.find()
    console.log("12", model)
    res.send(model)
  })
  router.get('/web/users/:id', async (req, res) => {
    let model = await Users.findById(req.params.id)
    console.log("12", model)
    res.send(model)
  })
  router.post('/web/comments', async (req, res) => {
    let model = await Comments.create(req.body)
    await Blogs.findByIdAndUpdate(req.body.relateBlogId, 
      // { msgs: req.body.msgs },
      {$inc : {msgs : 1}}
      )
    console.log("12", model)
    res.send(model)
  })
  router.get('/web/comments/:blogsId', async (req, res) => {
    const comments = await Comments.find().where({ relateBlogId: req.params.blogsId })
    console.log(comments)
    res.send(comments)
  })
  router.post('/web/messages', async (req, res) => {
    let model = await Messages.create(req.body)
    console.log("12", model)
    res.send(model)
  })
  router.get('/web/messages', async (req, res) => {
    // console.log("123",await Blogs.findOne({
    //     _id: req.params.blogsId}))
    const messages = await Messages.find()
    console.log(messages)
    res.send(messages)
  })
  router.post('/web/friends', async (req, res) => {
    let model = await Friends.create(req.body)
    console.log("12", model)
    res.send(model)
  })
  router.get('/web/friends', async (req, res) => {
    let model = await Friends.find()
    console.log("12", model)
    res.send(model)
  })
  router.get('/heros/list', async (req, res) => {
    const parent = await Category.findOne({
      name: 'heros'
    }).populate({
      path: 'chlidren',
      populate: {
        path: 'herosList'
      }
    }).lean()
    // const parent = await Category.findOne({name: 'news'})
    // const cats = await Category.aggregate([
    //     {$match: { parent: parent._id}},
    //     {
    //         $lookup: {
    //             from: 'articles',
    //             localField: '_id',
    //             foreignField: 'categories',
    //             as: 'newsList'

    //         }
    //     }
    // ])
    res.send(parent.chlidren)
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
  router.post('/web/upload', upload.single('file'), async (req, res) => {
    let file = req.file
    // file.url = `http://www.coco727.com/uploads/${file.filename}`
    res.send(file)
  })
  app.use(router)
}
