#!/usr/bin/env node

const yargs = require("yargs");
var fs = require('fs');
var path = require('path');
var pkginfo = require('pkginfo')(module);

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;

//  console.log(module.path);
// const greeting = `Hello, ${options.name}!`;
fs.createReadStream(module.path+'/gitignore/' + options.name + '.gitignore').pipe(fs.createWriteStream('.gitignore'));
// console.log(greeting);