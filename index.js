const express = require("express");
const fs = require("fs");

const app = express();

app.get("/employees", (req, res) => {

    fs.readFile(
        "employees.json",
        "utf8",
        (err, data) => {

            if (err) {
                return res.send("Fayl tapilmadi");
            }

            let employees = JSON.parse(data);

            res.send(employees);

        }
    );

});

app.listen(3000, () => {
    console.log("Server isleyir");
});