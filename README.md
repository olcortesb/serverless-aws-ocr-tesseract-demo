# Template for simple lambda *serverless framework* deploy

## Summary
A simple template with a single lambda prepared for deploy and test the configurations and basic permision deploy.

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

## Usage

- Download this repository
```
# by ssh for example
git clone git@github.com:olcortesb/serverless-aws-nodejs-template.git
```

- Deploy the lambda
```
sls deploy --aws-profile nombre-de-nuestro-profile --stage dev
```

- Call lambda function
```
serverless invoke --function hello --aws-profile name-you-profile
```

- Remove Stack
```
serverless remove --stage dev
```