const express = require('express');
const bodyParser = require("body-parser");
const { testAlphNum } = require("./__tests/alphnum");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile( __dirname  + '/index.html');
})

app.post('/verif.html', function(request, res) {
  var champ = request.body.champ; 
  testAlphNum(champ) ? res.send(champ) : res.send(' ERREUR /!\\ ');
});

app.listen(port, () => {
  console.log(`SERVER PORT => ${port}`)
})