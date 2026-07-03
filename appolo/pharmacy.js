var express = require('express')
var drug = express.Router()

drug.get('/', (req, res) => {
    var drugDetails = [
        {drugName: "atorvastatin", price: 600, drugclass: 'statins', rowcolumn: 'A33'},
        {drugName: "Lisinopril", price: 550, drugclass: '(ACE) Inhibitors', rowcolumn: 'A34'},
        {drugName: "Metformin", price: 20, drugclass: 'Biguanides', rowcolumn: 'A35'},
        {drugName: "amlodipine", price: 126, drugclass: 'calcium channel blockers', rowcolumn: 'A36'},
        {drugName: "Omeprazole", price: 455, drugclass: 'proton pump inhibitors(PPIs)', rowcolumn: 'A37'},
        {drugName: "Albuterol", price: 356, drugclass: 'short-acting beta agonies(SABAs)', rowcolumn: 'A38'}
    ]
    res.send(drugDetails)
});

module.exports = drug;
