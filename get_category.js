const should = require('chai').should();
const expect = require('chai').expect;
const request = require('supertest');

describe("Get Category Detail", () => {
  let response;

  before(async () => {
    response = await request("https://kasir-api.belajarqa.com")
      .get("/categories/2e67cf28-5038-4464-b402-6ecb85a0d0c0")
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNjczYzE1LTQyN2UtNGU0NC04NWI3LWY4YjhiMmFjNWRjZSIsImNvbXBhbnlJZCI6Ijk2OWJkZDBlLTU0NGYtNDE3Ny04Zjc4LTFhOTBhYmVhYWI1NSIsImlhdCI6MTY5NzM4MDY4OH0.2K_OlInbYV_Y5B9hYgV6RMlg6_Xs2AkZ0LapnXUIJj4');
  });

  it("Response status is 200", async () => {
    expect(response.status).to.equal(200);
  });

  it("name equals Produk Rumah Tangga", async () => {
    console.log(response.body);
    expect(response.body.data.category.name).to.equal("Produk Kecantikan");
  });
});
