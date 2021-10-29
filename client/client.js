import express from 'express'
const app = express()
const port = 3000;
import fetch from "node-fetch";

app.get('/', (req, res) => {
  res.status(200).send({
    data: 'this is from client service'
  })
})

app.get('/client/post', async (req, res) => {
  try {
    const response = await fetch('http://post-service:3001/');
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


app.get('/client/user', async (req, res) => {
  try {
    const response = await fetch('http://user-service:3002/');
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
  res.status(404).send('you seem to be lost. regards client service ');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})