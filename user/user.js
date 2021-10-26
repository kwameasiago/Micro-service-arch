import express from 'express'
const app = express()
const port = 3002
import fetch from "node-fetch";


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/user', (req, res) => {
  res.send('Hello World! info')
})

app.get('/user/info', async (req, res) => {

  try {
    const response = await fetch('http://post-service:3001/post');
    const data = await response.text();
    console.log(data)
    res.status(200).send({
      data: 'success',
      more: data
    })
  } catch (error) {
    console.log('************************************')
    console.log(error)
    console.log('************************************')
    res.status(200).send({
      data: 'An error occured',
      more: error
    })
  }


})

app.get('*', function (req, res) {
  console.log('----------------', req.originalUrl)
  res.send('what???', 404);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})