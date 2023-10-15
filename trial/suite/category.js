const request = require("supertest");
const { expect } = require("chai");

const config = require("../../data/config.json")
const login  = require("../../data/auth/login.json");
const addCategory = require("../../data/Category/addCategory.json")
const updateCategory = require("../../data/Category/updateCategory.json")

let userId;
let token;

describe('Category Feature', () => {
    describe('Get Token', () => {
        it('Success Get Token', async () => {
            const response = await request(config.baseUrl)
            .post("/authentications") 
            .send(login.loginSuccess)

            token = (await response).body.data.accessToken
        })  
    }),
    describe('Create Category', () => {
        it('Success create a new Category', async () => {
            const response = request(config.baseUrl)
            .post("/categories")
            .send(addCategory.success)
            .set("Authorization", `Bearer ${token}`)

            userId = (await response).body.data.categoryId

            expect((await response).status).to.equal(201)
            expect((await response).body.message).to.equal('Category berhasil ditambahkan')
        }),
        it('Failed create a new Category', async () => {
            const response = request(config.baseUrl)
            .post("/categories")
            .send(addCategory.failed)
            .set("Authorization", `Bearer ${token}`)

            expect((await response).status).to.equal(400)
            expect((await response).body.status).to.equal('fail')
        })   
    }),
    describe('Get Category Detail', () => {
        it('Success Get Category Detail', async () => {
            const response = await request(config.baseUrl)
            .get(`/categories/${userId}`)
            .set("Authorization", `Bearer ${token}`)

            expect((await response).status).to.equal(200)
            expect((await response).body.data.category.name).to.equal('Produk Kecantikan')
        }), 
        it('Failed Get User Detail', async () => {
            const response = await request(config.baseUrl)
            .get(`/categories/${userId + "123"}`)
            .set("Authorization", `Bearer ${token}`)

            expect((await response).status).to.equal(404)
            expect((await response).body.message).to.equal('id tidak valid')
        })
    }),
    describe('Update Category Detail', () => {
        it('Success Update Category Detail', async () => {
            const response = await request(config.baseUrl)
            .put(`/categories/${userId}`)
            .send(updateCategory.success)
            .set("Authorization", `Bearer ${token}`)
                
            expect((await response).status).to.equal(200)
            expect((await response).body.data.name).to.equal('Produk Rumah Tangga')
        })  
        it('Failed Update Category Detail', async () => {
            const response = await request(config.baseUrl)
            .put(`/categories/${userId}`)
            .send(updateCategory.failed)
            .set("Authorization", `Bearer ${token}`)

            expect((await response).status).to.equal(400)
            expect((await response).body.message).to.equal('"name" is not allowed to be empty')
        })
    }),
    describe('Delete Category', () => {
        it('Success Delete Category', async () => {
            const response = await request(config.baseUrl)
            .delete(`/categories/${userId}`)
            .set("Authorization", `Bearer ${token}`)

            expect((await response).status).to.equal(200)
        }),
        it('Failed Delete Category', async () => {
            const response = await request(config.baseUrl)
            .delete(`/categories/${userId + "123"}`)
            .set("Authorization", `Bearer ${token}`)

            expect((await response).status).to.equal(404)
        })
    })
})
