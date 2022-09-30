const request = require("supertest");
const expect = require("chai").expect;
const endPoint = 'https://thronesapi.com/';
const api = 'api/v2/Characters';
let response;

describe("GET /Characters",  function () {
  it("validate response is 200", async function () {
    response = await request(endPoint).get(api).set('Accept', 'application/json; charset=utf-8')
    expect(response.status).to.eql(200);
  });

  it("validate number of results", function () {
    expect(response.body.length).to.eql(53);
  });

  it("validate is an array", function () {
    expect(response.body).to.be.an('array');
  });
});