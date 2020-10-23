const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('HEY! omar ayman shokry 222')
})
app.listen(3000, () => console.log('Server running on port 3000'))