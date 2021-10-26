const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/post', (req, res) => {
  console.log('user page')
  res.send('Hello World! post')
})



app.get('/post/info', (req, res) => {
  console.log('user info page')
  res.send('Hello World! post info')
})

app.get('*', function(req, res){
  console.log('----------------',req.originalUrl)
  res.send('what???', 404);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})