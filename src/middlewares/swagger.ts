import * as express from "express";
import * as oasTools from "oas-tools";
import { readFileSync } from "fs";
import * as YAML from "js-yaml";

// tslint:disable-next-line
export const isProd = process.env.NODE_ENV === "production";
function loadDocumentSync(file: string): any {
  return YAML.load(readFileSync(file).toString());
}
export const initSwaggerMiddlware = function(
  app: express.Express,
  basePath: string,
  cb: () => any
) {
  const swaggerDoc = loadDocumentSync(basePath + "/definition/swagger.yaml");
  const options = {
    controllers: basePath + "/controllers",
    loglevel: "debug",
    strict: true,
    router: true,
    validator: true,
    docs: {
      apiDocs: "/api-docs",
      apiDocsPrefix: "",
      swaggerUi: "/swagger",
      swaggerUiPrefix: ""
    }
  };
  oasTools.configure(options);
  oasTools.initialize(swaggerDoc, app, cb);
};
