const should = require('chai').should();
const expect = require('chai').expect;
const request = require('supertest');

describe("Create Category", () => {
    const response = request("https://kasir-api.belajarqa.com")
      .post("/categories")   
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNjczYzE1LTQyN2UtNGU0NC04NWI3LWY4YjhiMmFjNWRjZSIsImNvbXBhbnlJZCI6Ijk2OWJkZDBlLTU0NGYtNDE3Ny04Zjc4LTFhOTBhYmVhYWI1NSIsImlhdCI6MTY5NzM4MDY4OH0.2K_OlInbYV_Y5B9hYgV6RMlg6_Xs2AkZ0LapnXUIJj4')
    
        .send({
          "name": "Produk Kecantikan",
          "description": "Produk Kecantikan dan Skincare Mantul"
       }
       
      ); 

  it("Response status is 201", async () => {
    expect((await response).status).to.equal(201);
  });

  it("name equals Produk Kecantikan", async () => { 
    console.log((await response).body);
    expect((await response).body.data.name).to.equal("Produk Kecantikan");
  });
});
