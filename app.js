const express = require("express");
const app = express();

const doctors = require("./appolo/doctors");
const patients = require("./appolo/patients");
const pharmacy = require("./appolo/pharmacy");
const staff = require("./appolo/staff");

app.use("/doctors", doctors);
app.use("/patients", patients);
app.use("/pharmacy", pharmacy);
app.use("/staff", staff);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});