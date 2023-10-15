const { expect } = require("chai");
const { getToken } = require("../auth/token.js");
const request = require("supertest");
const config = require("../../../data/config.json");
const userParams = require("../../../data/category/getcategory.json");

async function deletecategory(params, token) {
    const response = await request(config.baseUrl)
    .delete(`/categorys/${params}`)
    .set("Authorization", `Bearer ${token}`)

    return response
}

module.exports = { deletecategory }

describe('Delete category', () => {
    it('Success Delete category', async () => {
        const token = await getToken()
        const response = await deletecategory(
            userParams.success.params, 
            token)

        expect((await response).status).to.equal(200)
    })  
},
    it('Failed Delete category', async () => {
        const token = await getToken()
        const response = await deletecategory(
            userParams.failed.params, 
            token) 

        expect((await response).status).to.equal(404)
})
)