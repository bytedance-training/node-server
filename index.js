var express = require('express')
var app = express()

app.get('/api/test', function (req, res) {
  res.json({
    status: 0,
    errMsg: '',
    data: {
      a: 1
    }
  })
})

app.listen(3000)

