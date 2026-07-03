const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    database: "hospital"
});

connection.connect((err) => {
    if (err) throw err;

    console.log("Connected to MySQL\n");

    // Doctors
    connection.query("SELECT * FROM doctor1", (err, result) => {
        if (err) throw err;

        console.log("DOCTORS");
        console.table(result);

        // Patients
        connection.query("SELECT * FROM patients1", (err, result) => {
            if (err) throw err;

            console.log("PATIENTS");
            console.table(result);

            // Pharmacy
            connection.query("SELECT * FROM pharmacy", (err, result) => {
                if (err) throw err;

                console.log("PHARMACY");
                console.table(result);

                // Staff
                connection.query("SELECT * FROM staff1", (err, result) => {
                    if (err) throw err;

                    console.log("STAFF");
                    console.table(result);

                    connection.end();
                });
            });
        });
    });
});