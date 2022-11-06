'use strict';

const {SendMessageCommand} = require("@aws-sdk/client-sqs");
const {sqsClient} = require("./libs/sqsClient.js");

const path = require('path');
const fs = require('fs');
const { createWorker } = require('tesseract.js');

module.exports.hello = async (event) => {
  const dir = path.join('/tmp');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const worker = createWorker({
    cachePath: path.join('/tmp'),
  });
      
  const result = await run(worker);

  // Set the parameters
  const params = {
    DelaySeconds: 10,
    MessageAttributes: {
      Title: {
        DataType: "String",
        StringValue: "The Whistler",
      },
      Author: {
        DataType: "String",
        StringValue: "John Grisham",
      },
      WeeksOn: {
        DataType: "Number",
        StringValue: "6",
      },
    },
    MessageBody:result,

    // Change by your accoun number XXXXXXXXXXXX
    QueueUrl:"https://sqs.us-east-1.amazonaws.com/XXXXXXXXXXXX/dev-process-text" //SQS_QUEUE_URL; e.g., 'https://sqs.REGION.amazonaws.com/ACCOUNT-ID/QUEUE-NAME'
  };

  await sqsClient.send(new SendMessageCommand(params));

  return {
    statusCode: 200,
    body: result
  };
};


module.exports.listen = async (event)=>{
  event.Records.forEach(record => {
    const { body } = record;
    console.log(body);
  });
  return {};
}

async function run(worker) {
  await worker.load();
  await worker.loadLanguage('eng');
  //await move_file('');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
  console.log(text);
  await worker.terminate();  
  return text;
}

