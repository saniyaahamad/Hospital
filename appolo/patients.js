var express = require('express')
var patient = express.Router()

patient.get('/', (req, res) => {
    var patientDetails = [
        {patientsName: 'M.rajesh', age: 60, gender: 'male', address: 'H. no. 1-111/3, tej towers', room_no: 260},
        {patientsName: 'M.ganesh', age: 50, gender: 'male', address: 'H. no. 2-223/4, Hitech city mumbai', room_no: 261},
        {patientsName: 'M.upendra', age: 52, gender: 'male', address: 'H. no. 1-777/3, navi mumbai', room_no: 262},
        {patientsName: 'S.sitara', age: 48, gender: 'female', address: 'H. no. 1-345/3, new delhi gandhi bazar', room_no: 263},
        {patientsName: 'M.thanesh', age: 60, gender: 'male', address: 'H. no. 1-852/7, chandini chowk delhi ', room_no: 264},
        {patientsName: 'J.kiranmai', age: 60, gender: 'male', address: 'H. no. 1-112/5, guwahati towers', room_no: 265}
    ]
    res.send(patientDetails)
});

module.exports = patient;
