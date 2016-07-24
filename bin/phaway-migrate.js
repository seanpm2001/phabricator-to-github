#!/usr/bin/env node
'use strict';
const program = require('commander');
const pjson = require('../package.json');
const migrate = require('../src/migrate');
const createLoggerFactory = require('../src/utils/createLoggerFactory');

program
  .description('Migrate Phabricator issues to Github')
  .version(pjson.version)
  .option('-v, --verbose', 'Change log level to verbose')
  .option('-d, --debug', 'Change log level to debug')
  .parse(process.argv);

// eslint-disable-next-line no-nested-ternary
const logLevel = program.debug ? 'debug' : (program.verbose ? 'verbose' : 'info');

migrate(createLoggerFactory(logLevel));