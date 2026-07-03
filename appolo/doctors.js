var express = require('express')
var doc = express.Router()

doc.get('/', (req,res) => {
    var doctorsDetails = [
        {docName: 'M.ravi', ID: 111 , specialityIn: 'psychiatry', available: true },
        {docName: 'S.giri', ID: 112 , specialityIn: 'dermatology', available: true },
        {docName: 'P.usha', ID: 113 , specialityIn: 'cardiologist', available: false },
        {docName: 'L.sita', ID: 114 , specialityIn: 'anesthesiology', available: true },
        {docName: 'K.tharun', ID: 115 , specialityIn: 'Neurologist', available: false },
        {docName: 'J.kiran', ID: 116 , specialityIn: 'general checkup', available: true },
    ]
    res.send(doctorsDetails)
});

module.exports = doc;
