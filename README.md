# OCR tesseract *AWS*-lambda demo with *serverless framework* 

## Summary
A simple demo using [tesseract.js](https://github.com/naptha/tesseract.js#tesseractjs) OCR wiht AWS lambda Function.  
## Prerequisites

- Node.js
```
node --version    
v14.17.0
```

- npm
```
npm --version
8.10.0
```

- Serverless framework
```
serverless --version
Framework Core: 3.19.0
Plugin: 6.2.2
SDK: 4.3.2
```

- AWS cli
```
aws --version
aws-cli/2.4.2 
```
- AWS Credentias configured

## Notes of develop and configurations

- Run `npm init` for start the npm project and install packages over the original template

- Change the name of services in serverless.yml

```
service: serverless-aws-ocr-tesseract-demo
```

- Add the code of tesseract sample using the official documentations:
    - https://github.com/naptha/tesseract.js#tesseractjs

- Add more time out value and more memory to lambda
```
memorySize: 3008
timeout: 500
```
## Usage

- Download this repository
```
# by ssh for example
git clone git@github.com:olcortesb/serverless-aws-ocr-tesseract-demo.git
```

- Deploy the lambda
```
sls deploy --aws-profile nombre-de-nuestro-profile --stage dev
```

- Call lambda function
```
serverless invoke --function hello --aws-profile name-you-profile
```

- Call Lambda functions by api gateway

```
curl -H 'x-api-key:you-api-key-result-in-deploy'  https://you-url-result-in-deploy.execute-api.us-east-1.amazonaws.com/dev/call
```

- Remove Stack
```
serverless remove --stage dev
```

# Based on template

This repo is base on template: https://github.com/olcortesb/serverless-aws-nodejs-template



