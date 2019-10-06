import { Request, Response } from "express";
import { TDebug } from "../log";
import { Swagger20Request } from "swagger-tools";
import * as HttpStatus from "http-status-codes";

const debug = new TDebug("app:src:controllers:helloworld");

export async function getHelloWorld(
  req: Request & Swagger20Request,
  res: Response
): Promise<any> {
  const greeting =
    req.swagger.params && req.swagger.params.greeting.value
      ? req.swagger.params.greeting.value
      : "World";
  debug.log("Greeting: ", greeting);
  res.send({ msg: "hello " + greeting });
}

export async function getWelcome(
  req: Request & Swagger20Request,
  res: Response
): Promise<any> {
  res.sendStatus(HttpStatus.OK);
}
