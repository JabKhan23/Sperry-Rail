const fs = require("fs");
const { parse } = require("csv-parse");

const data = [];

fs.createReadStream("../found_by_23_July_2022_to_29_July_2022.csv")
    .pipe(parse({ 
        delimiter: ",",
        columns: true,
        ltrim: true 
    }))
    .on("data", function(row){
        data.push(row);
    })
    .on("error", function(error) {
        console.log(error.message);
    })
    .on("end", function() {
        console.log("finished");
        console.log(data);
    });
