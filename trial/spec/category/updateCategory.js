const { expect } = require("chai");
const { getToken } = require("../auth/token.js");
const request = require("supertest");
const config = require("../../../data/config.json");
const userParams = require("../../../data/Category/getCategory.json");
const updateUserData = require("../../../data/Category/updateCategory.json");

async function updateCategory(params, payload, token) {
    const response = await request(config.baseUrl)
    .put(`/Categorys/${params}`)
    .send(payload)
    .set("Authorization", `Bearer ${token}`)

    return response
}

module.exports = { updateCategory }

describe('Update Category Detail', () => {
    it('Success Update Category Detail', async () => {
        const token = await getToken()
        const response = await updateCategory(
            userParams.success.params, 
            updateUserData.success,
            token)
            
        expect((await response).status).to.equal(200)
        expect((await response).body.data.name).to.equal("Produk Rumah Tangga");
    })  
},
    it('Failed Update Category Detail', async () => {
        const token = await getToken()
        const response = await updateCategory(
            userParams.failed.params, 
            updateUserData.failed,
            token) 

        expect((await response).status).to.equal(400)
        expect((await response).body.message).to.equal('"name" is not allowed to be empty')
})
)