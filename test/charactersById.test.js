const request = require("supertest");
const expect = require("chai").expect;
const endPoint = 'https://thronesapi.com/';
const api = 'api/v2/Characters';
let response;
let randomId;

describe("Get /Characters/{id}",  function () {
  
  it("Validate Random Id from random character", async function () {
    response = await request(endPoint).get(api).set('Accept', 'application/json; charset=utf-8')
    expect(response.status).to.eql(200);
    randomId = [Math.floor(Math.random() * response.body.length)]
    expect(randomId).to.not.be.null;
  });

  it("Validate Random Character returns the expected schema", async function () {
    response = await request(endPoint).get(`${api}/${randomId}`).set('Accept', 'application/json; charset=utf-8')
    expect(response.status).to.eql(200);
    expect(response.body).to.have.property('id');
    expect(response.body).to.have.property('firstName');
    expect(response.body).to.have.property('lastName');
    expect(response.body).to.have.property('fullName');
    expect(response.body).to.have.property('title');
    expect(response.body).to.have.property('family');
    expect(response.body).to.have.property('image');
    expect(response.body).to.have.property('imageUrl');
  });

  it("Validate Random Character does not return nulls", async function () {
    response = await request(endPoint).get(`${api}/${randomId}`).set('Accept', 'application/json; charset=utf-8')
    expect(response.status).to.eql(200);
    expect(response.body.id).to.not.equal(null);
    expect(response.body.firstName).to.not.equal(null);
    expect(response.body.lastName).to.not.equal(null);
    expect(response.body.fullName).to.not.equal(null);
    expect(response.body.title).to.not.equal(null);
    expect(response.body.family).to.not.equal(null);
    expect(response.body.image).to.not.equal(null);
    expect(response.body.imageUrl).to.not.equal(null);

  });
  
});