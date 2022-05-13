require("dotenv").config();
const mongoose = require('mongoose');
const supertest = require("supertest");
const {app} = require("../../app");
const { controllerGetSingleList } = require("../fav/fav.controller");

const request = supertest(app);

const URI = "mongodb://localhost:27017";

describe("Test endpoints User and funcionalidades  ", ()=>{

    // connet DB
  beforeAll(async () =>{
    await mongoose.connect(URI);
  })

  // Disconnet DB
  afterAll(async () =>{
    await mongoose.disconnect();
  }) 

   describe("Request POST to create a new user", ()=>{ 
        it("Should return a statuscode 200 and the user created", async()=>{
          const respuesta = await request.post('/api/user/createuser')
          .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.Y29yeXM5MEBob3RtYWlsLmNvbQ.4aUgyWGMn99spG2ujO9Z8k7_vMIdXwkg0c4NKyGzemA')
          .set('Content-Type', 'application/json')
          .send({"email":"cristian@controllerGetSingleList.com", "password":"Testing.09","name":"User virtual testing"});
          expect(respuesta.statusCode).toEqual(201);
        })
    });  
});
  