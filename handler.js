'use strict';

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

    return {
        statusCode: 200,
        body: result
    };
};

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };

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
