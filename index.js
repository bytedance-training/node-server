var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.json({
    status: 0,
    errMsg: '',
    data: {
      a: 1
    }
  })
})

app.listen(3000)

