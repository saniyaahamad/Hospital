// const mysql2 = require("mysql2");

// const connection = mysql2.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "info123"
// });

// connection.connect((err) => {
//     if (err) throw err;

//     console.log("Connected to MySQL");

//     connection.query("CREATE DATABASE hospital3", (err, result) => {
//         if (err) throw err;

//         console.log("Database created successfully");
//         console.log(result);

//         connection.end();
//     });
// });

const mysql2 = require("mysql2");
const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    database: "hospital3"
});

// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected to hospital3 database.");
//     connection.query(
//         "CREATE TABLE IF NOT EXISTS patient (pid INT, pname VARCHAR(25), age INT, gender VARCHAR(25))",
//         function (err, result) {
//             if (err) throw err;
//             console.log("Patient table created.");
//             connection.query(
//                 "CREATE TABLE IF NOT EXISTS staff (eid INT, ename VARCHAR(25), age INT, gender VARCHAR(25))",
//                 function (err, result) {
//                     if (err) throw err;
//                     console.log("Staff table created.");
//                     connection.query(
//                         "CREATE TABLE IF NOT EXISTS doctor (did INT, dname VARCHAR(25), age INT, gender VARCHAR(25))",
//                         function (err, result) {
//                             if (err) throw err;
//                             console.log("Doctor table created.");

//                             connection.end();
//                         }
//                     );
//                 }
//             );
//         }
//     );
// });
// module.exports = connection;

// connection.connect(function (err) {
//     if (err) throw err;

//     console.log("Connected successfully to insert data.");
//     connection.query(
//         "INSERT INTO patient VALUES (1,'sahil kumar',25,'m'),(2,'sumit kumar',28,'m'),(3,'ajay kumar',28,'m'),(4,'suhani',27,'f')",
//         function (err, result) {
//             if (err) throw err;
//             console.log("Patients inserted:", result);

//             connection.query(
//                 "INSERT INTO staff VALUES (101,'amit',18,'m'),(102,'suketu',19,'m'),(103,'divin',45,'m')",
//                 function (err, result) {
//                     if (err) throw err;
//                     console.log("Staff inserted:", result);
//                     connection.query(
//                         "INSERT INTO doctor VALUES (201,'dr.patel',45,'m'),(202,'dr.shah',29,'m')",
//                         function (err, result) {
//                             if (err) throw err;
//                             console.log("Doctors inserted:", result);

//                             connection.end();
//                         }
//                     );
//                 }
//             );
//         }
//     );
// });

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected successfully to execute deletions.");

    // 1. Delete from patient table
    connection.query("delete from patient where pid=4", function (err, result, fields) {
        if (err) throw err;
        console.log("Patient deletion status:", result);

        // 2. Delete from staff table
        connection.query("delete from staff where eid=3", function (err, result, fields) {
            if (err) throw err;
            console.log("Staff deletion status:", result);

            // 3. Delete from doctor table
            connection.query("delete from doctor where dname='dr.shah'", function (err, result, fields) {
                if (err) throw err;
                console.log("Doctor deletion status:", result);
            });
        });
    });
});


// //check if operations are applied 
// connection.connect(function (err) {
//     if (err) throw err;

//     connection.query("SELECT * FROM patient", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });

//     connection.query("SELECT * FROM staff", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });

//     connection.query("SELECT * FROM doctor", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);

//         connection.end();
//     });
// });

// // Retrieve datas 
// connection.connect(function (err) {
//     if (err) throw err;
//     connection.query(
//         "SELECT pname, age, gender FROM patient",
//         function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//         }
//     );
//     connection.query(
//         "SELECT dname, age FROM doctor",
//         function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//         }
//     );
//     connection.query(
//         "SELECT ename, gender FROM staff",
//         function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//         }
//     );
// });


