const { expect } = require("chai");
const supertest = require("supertest");
const knex = require('knex');
const app = require("../src/app");

describe("App", () => {
    it.skip('GET / responds with 200 containing "Hello, world!"', () => {
        return supertest(app).get("/").expect(200, "Hello, world!");
    });
});
//come back to this test