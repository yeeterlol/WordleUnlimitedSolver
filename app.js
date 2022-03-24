const express = require("express")();
const app = express()
const port = 3000
// Remove .html and .html
app.use(express.static("public", {
    extensions: ['html', 'htm'],
    // Other options here
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App up at port ${port}`)
})