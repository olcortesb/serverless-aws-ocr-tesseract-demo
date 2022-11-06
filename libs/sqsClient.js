const {SQSClient} = require("@aws-sdk/client-sqs");
// Set the AWS Region.
const REGION = "us-east-1"; //e.g. "us-east-1"
// Create SQS service object.
const sqsClient = new SQSClient({ region: REGION });
module.exports = { sqsClient }