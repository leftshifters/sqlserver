var sql = require('mssql');
var fs = require('fs');
var assert = require('assert');
var createTableSQL = fs.readFileSync('./sql/create-table-gift-voucher.sql', { encoding: 'utf8' });
var createTrackLocation = fs.readFileSync('./sql/track-location.sql', { encoding: 'utf8' });

var config = {
    user: 'debjeet',
    password: 'password',
    server: 'faasostemp.c43v0lnxozel.us-west-2.rds.amazonaws.com', // You can use 'localhost\\instance' to connect to named instance
    database: 'FAASOSWEB',

    options: {
        // encrypt: true // Use this if you're on Windows Azure
    }
};

var connection = new sql.Connection(config, function(err) {
    // ... error checks

    // Query

    var request = new sql.Request(connection); // or: var request = connection.request();
    request.query(createTrackLocation, function(err, recordset) {
        // ... error checks
        if (err) {
            console.error(err);
        }

        console.dir(recordset);
    });

    // Stored Procedure

    // var request = new sql.Request(connection);
    // request.input('input_parameter', sql.Int, 10);
    // request.output('output_parameter', sql.VarChar(50));
    // request.execute('procedure_name', function(err, recordsets, returnValue) {
    //     // ... error checks

    //     console.dir(recordsets);
    // });

});