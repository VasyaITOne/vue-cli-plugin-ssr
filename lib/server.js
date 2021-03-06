const express = require('express')
const applyApp = require('./app')

exports.createServer = ({
  port,
  host,
}) => {
  return new Promise((resolve, reject) => {
    const app = express()

    applyApp(app)

    app.listen(port, host, err => {
      if (err) {
        reject(err)
      } else {
        console.log(`Server listening on ${host}:${port}`)
        resolve({ app, port })
      }
    })
  })
}
