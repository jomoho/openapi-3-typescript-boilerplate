import chaiHttp = require("chai-http");
import * as chai from "chai";
import app from "../src/application";

const expect = chai.expect;
chai.use(chaiHttp);

describe("App", () => {
  it("swagger ui works", (done: () => void): void => {
    chai
      .request(app)
      .get("/swagger/")
      .send({})
      .end((err: Error, res: any): void => {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
  });

  it("swagger api-docs works", (done: () => void): void => {
    chai
      .request(app)
      .get("/api-docs/")
      .send({})
      .end((err: Error, res: any): void => {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
  });
});
