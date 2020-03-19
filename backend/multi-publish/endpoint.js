
const addDataToAds = require("../database/addDataToAds");

const cote = require("cote");


const saveAdResponder = new cote.Responder({name: 'save ad Responder'});

saveAdResponder.on('saveAd', (req, cb) => {

    // var newAd = {
    //     title: req.adDataToSave.title,
    //     description: req.adDataToSave.description,
    //     bedrooms: req.adDataToSave.bedrooms
    // }

    // var newAd = JSON.stringify({...req.adDataToSave});
    var newAd = {...req.adDataToSave}
    // console.log(req)
    console.log("New Ad Data:")
    console.log(newAd)
    addDataToAds(newAd)
    // for(var key in req.adDataToSave){

    // }
    // console.log("Req")
    // console.log(req)
    // console.log("newAd")
    // console.log(req)
    // var pAd = new Ad(newAd)

    // pAd.save().then(() => {
    //     console.log("Successfully saved")
    // }).catch(err => {console.log(err)})

    cb(null, "Successfull saved in the Backend")
});