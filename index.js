#!/usr/bin/env node

const yargs = require("yargs");
var fs = require('fs');
var path = require('path');
var pkginfo = require('pkginfo')(module);

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Name of template of gitignore you want to create", type: "string", demandOption: true })
 .argv;

fs.createReadStream(module.path+'/gitignore/' + options.name + '.gitignore').pipe(fs.createWriteStream('.gitignore'));