const app = require("express")();
const bodyParser = require("body-parser");
const cote = require("cote");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Main Endpoint pupa")
})

app.post('/create-ad', (req, responds) => {
    console.log("Hello")
    saveAdRequestor.send({type: 'saveAd', adDataToSave: req.body.adDataToSave}, (err, res) => {
        responds.send("Successfully saved")
    });
    
})


const saveAdRequestor = new cote.Requester({name: 'save ad to database requestor'});


app.listen(4545, () => {
    console.log("Sever is up and Running on Port 4545, Happy Experementing")
})