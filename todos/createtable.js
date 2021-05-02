'use strict';

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();

module.exports.create = (event, context, callback) => {

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        KeySchema: [
            { AttributeName: "id", KeyType: "HASH" }
        ],
        AttributeDefinitions: [
            { AttributeName: "id", AttributeType: "S" }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10
        }
    };

    dynamodb.createTable(params, function (err, data) {
        if (err) {
            callback(null, {
                statusCode: err.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: err.message,
            });
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(data, null, 2),
        };
        callback(null, response);

    });

};
