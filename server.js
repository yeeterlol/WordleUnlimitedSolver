const express = require('express');

const app = require('express')();
const port = process.env.PORT || 3000;

app.use(express.static("public", {
    extensions: ['html', 'htm'],
}));

app.get("", (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App up at port ${port}`)
})