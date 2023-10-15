const { expect } = require("chai");
const { getToken } = require("../auth/token.js");
const request = require("supertest");
const config = require("../../../data/config.json");
const userParams = require("../../../data/category/getCategory.json");

async function getCategory(params, token) {
    const response = await request(config.baseUrl)
    .get(`/categorys/${params}`)
    .set("Authorization", `Bearer ${token}`)

    return response
}

module.exports = { getCategory }

describe('Get Category Detail', () => {
    it('Success Get Category Detail', async () => {
        const token = await getToken()
        const response = await getCategory(userParams.success.params, token)

        expect((await response).status).to.equal(200) 
          console.log(response.body);
          expect(response.body.data.category.name).to.equal("Produk Kecantikan");
    })  
},
    it('Failed Get Category Detail', async () => {
        const token = await getToken() 
        const response = await getCategory(userParams.failed.params, token)

        expect((await response).status).to.equal(404)
        expect((await response).body.message).to.equal('id tidak valid')
})
)