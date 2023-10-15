const should = require('chai').should();
const expect = require('chai').expect;
const request = require('supertest');

describe("Create User", () => {
    const response = request("https://kasir-api.belajarqa.com")
      .post("/registration") 
        .send({"name": "Toko Asep",
        "email": "asep@ex.com",
        "password": "asep123"
      }); 

  it("Response status is 201", async () => {
    expect((await response).status).to.equal(201);
  });

  it("name equals Toko Asep", async () => { 
    expect((await response).body.data.name).to.equal("Toko Asep");
  });
});
