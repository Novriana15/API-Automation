const should = require('chai').should();
const expect = require('chai').expect;
const request = require('supertest');

describe("Update Category", () => {
    const response = request("https://kasir-api.belajarqa.com")
      .put("/categories/473c6d11-8766-4268-a891-d54d4c1795af")   
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNjczYzE1LTQyN2UtNGU0NC04NWI3LWY4YjhiMmFjNWRjZSIsImNvbXBhbnlJZCI6Ijk2OWJkZDBlLTU0NGYtNDE3Ny04Zjc4LTFhOTBhYmVhYWI1NSIsImlhdCI6MTY5NzM4MDY4OH0.2K_OlInbYV_Y5B9hYgV6RMlg6_Xs2AkZ0LapnXUIJj4')
    
        .send({
            "name": "Produk Rumah Tangga",
            "description": "Produk Rumah Tangga Aesthetic"
         }
         
           
      ); 

  it("Response status is 200", async () => {
    expect((await response).status).to.equal(200);
  });

  it("name equals Produk Rumah Tangga", async () => { 
    console.log((await response).body);
    expect((await response).body.data.name).to.equal("Produk Rumah Tangga");
  });
});
