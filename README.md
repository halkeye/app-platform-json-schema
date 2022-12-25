# app-platform-json-schema

Tiny utility to generate a JSON Schema for the DigitalOcean App Spec from OpenAPI.

```
$ node index.js --help
Usage: app-platform-json-schema [options]

Options:
  --spec       Location of the bundled DigitalOcean OpenAPI spec; path or URL (Default: https://api-engineering.nyc3.digitaloceanspaces.com/spec-ci/DigitalOcean-public.v2.yaml)
  --optput     Path for output location (Default: app_spec.json)
```

The outputted JSON Schema is suitable for use with the [Red Hat VS Code YAML plugin](https://github.com/redhat-developer/vscode-yaml#associating-a-schema-to-a-glob-pattern-via-yamlschemas)
to provide validation and auto-completion when editing an [App Spec for DigitalOcean's App Platform](https://docs.digitalocean.com/products/app-platform/reference/app-spec/).
