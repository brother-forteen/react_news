const devModule  = require('./webpack-config/dev');
const prodModile = require('./webpack-config/prod');
let finalModule = {};
let ENV = process.env.NODE_ENV;

switch(ENV){
  case 'dev':
    finalModule = devModule;
    break;

  case 'prod':
    finalModule = prodModile;
    break;

  default :
    break;

}
module.exports = finalModule;
