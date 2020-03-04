const express = require('express')
const app = express()
app.use(require("cors")())
app.use(express.json())

require("./pluglins/mongoose")(app)
require("./routers/admin/index")(app)
require("./routers/web/index")(app)

app.listen(3000, () => console.log('http://localhost:3000'))