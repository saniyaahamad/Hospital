var express = require('express');
var Emp = express.Router();

Emp.get('/', (req, res) => {
    var EmpDetails = [
        {EmpName: 'M.rajesh khanna', role_department: "emergency medical Technician/emergency department", salary: 25000},
        {EmpName: 'S.ganesh chakravathi', role_department: "radiologic technologist/radiology department", salary: 30000},
        {EmpName: 'M.upendra naidu', role_department: "clinical pharmacist /pharmacy department", salary: 18000},
        {EmpName: 'L.sitara devi', role_department: "medical laboratory /laboratory department", salary: 20000},
        {EmpName: 'K.thanesh kumar', role_department: "physical therapist/phisiotherapy department", salary: 22000},
        {EmpName: 'J.rani kiramani', role_department: "registered dietitian/nutrition department", salary: 21000}
    ]
    res.send(EmpDetails);
});

module.exports = Emp;
