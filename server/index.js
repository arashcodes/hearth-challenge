const express = require('express');
var cors = require('cors')
const app = express();
const port = 3000;

app.use(cors());

const getResult = require('./getRes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/find-in-range', async (req, res) => {
    const {lat, lon, limit} = req.body;
    const result = await getResult(lat, lon, limit)
    
    res.send(result);
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})