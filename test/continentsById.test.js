const request = require("supertest");
const expect = require("chai").expect;
const endPoint = 'https://thronesapi.com/';
const api = 'api/v2/Continents';
let response;

describe("GET /api/v2/Continents/{id}",  function () {
  it("Validate Random Id from random continent", async function () {
    response = await request(endPoint).get(api).set('Accept', 'application/json; charset=utf-8')
    expect(response.status).to.eql(200);
    randomId = [Math.floor(Math.random() * response.body.length)]
    expect(randomId).to.not.be.null;
  });

  it("Validate Random continent returns the expected schema", async function () {
    response = await request(endPoint).get(`${api}/${randomId}`).set('Accept', 'application/json; charset=utf-8')
    expect(response.status).to.eql(200);
    expect(response.body).to.have.property('id');
    expect(response.body).to.have.property('name');
  });

  it("Validate Random continent does not return nulls", async function () {
    response = await request(endPoint).get(`${api}/${randomId}`).set('Accept', 'application/json; charset=utf-8')
    expect(response.status).to.eql(200);
    expect(response.body.id).to.not.equal(null);
    expect(response.body.name).to.not.equal(null);
  });
});