#!/usr/bin/env node

const yargs = require("yargs");
const fs = require('fs');
const path = require('path');
const pkginfo = require('pkginfo')(module);

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Name of template of gitignore you want to create", type: "string", demandOption: true })
 .argv;

// Sanitize input to prevent path traversal attacks
const templateName = options.name.replace(/[^a-zA-Z0-9+_-]/g, '');
const templatePath = path.join(module.path, 'gitignore', `${templateName}.gitignore`);
const outputPath = '.gitignore';

// Check if template file exists
if (!fs.existsSync(templatePath)) {
  console.error(`Error: Template '${templateName}' not found.`);
  console.error(`Template path: ${templatePath}`);
  console.error(`\nAvailable templates can be found in the gitignore/ directory.`);
  process.exit(1);
}

// Create read and write streams with error handling
const readStream = fs.createReadStream(templatePath);
const writeStream = fs.createWriteStream(outputPath);

readStream.on('error', (err) => {
  console.error(`Error reading template file: ${err.message}`);
  process.exit(1);
});

writeStream.on('error', (err) => {
  console.error(`Error writing .gitignore file: ${err.message}`);
  process.exit(1);
});

writeStream.on('finish', () => {
  console.log(`Successfully created .gitignore for ${templateName}`);
});

readStream.pipe(writeStream);