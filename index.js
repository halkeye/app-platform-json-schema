#! /usr/bin/env node

const fs = require('fs')
const parseArgs = require('minimist');
const toJsonSchema = require("@openapi-contrib/openapi-schema-to-json-schema");
const SwaggerParser = require("@apidevtools/swagger-parser");

const specDefault = 'https://api-engineering.nyc3.digitaloceanspaces.com/spec-ci/DigitalOcean-public.v2.yaml'
const outputDefault = 'app_spec.json'

async function main (specFile, output) {
  const spec = await SwaggerParser.dereference(specFile);
  spec.components.schemas.app_spec.title = "DigitalOcean App Platform Spec"
  spec.components.schemas.app_spec.description = "The application specification, or app spec, is a YAML manifest that declaratively states everything about your App Platform app, including each resource and all of your app’s environment variables and configuration variables."

  let jsonSchema = toJsonSchema(spec.components.schemas.app_spec);
  let stringified = JSON.stringify(jsonSchema, null, 2);

  fs.writeFile(output, stringified, (err) => {
    if (err) throw err;
  })
}

var argv = parseArgs(process.argv.slice(2));
var specFile = argv.spec || specDefault
var output = argv.output || outputDefault

if (argv.help || argv.h) {
  console.log(`Usage: app-platform-json-schema [options]

Options:
  --spec       Location of the bundled DigitalOcean OpenAPI spec; path or URL (Default: ${specDefault})
  --optput     Path for output location (Default: ${outputDefault})
  `);
} else {
  main(specFile, output);
}
