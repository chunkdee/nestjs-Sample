
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Note

Paga Collect package is installed in this sample app.

I have created a folder for Paga in SRC folder and referenced the paga collect library from within  paga.service.ts file.

The App would start only if you comment out the paga code referecnce
   //private readonly pagaCollect: any = require('paga-collect'); 


