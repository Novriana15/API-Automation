const { expect } = require("chai");
const { getToken } = require("../auth/token.js");
const request = require("supertest");
const config = require("../../../data/config.json");
const categoryData = require("../../../data/category/addcategory.json")

async function createcategory(payload,token) {
    const response = await request(config.baseUrl) // ini ke baseUrl
    .post("/category")
    .send(payload)
    .set("Authorization", `Bearer ${token}`)
    return response
}

module.exports = { createcategory }

describe('Create Category', () => {
    it('Success create a new category', async () => {
        const token = await getToken() // get token
        const payload = categoryData.success
        const response = await createcategory(payload, token)

        expect((await response).status).to.equal(201)
        expect((await response).body.message).to.equal('category berhasil ditambahkan')
    }),
    it('Failed create a new category', async () => {
        const token = await getToken() // get token
        const payload = categoryData.failed
        const response = await createcategory(payload, token)
        
        expect((await response).status).to.equal(400)
        expect((await response).body.status).to.equal('fail')
    })    
})
