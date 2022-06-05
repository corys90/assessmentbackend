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
          .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.Y29yeXM5MEBnbWFpbC5jb20.EJd-GySORX9_MgjAr1uioT7kFZ3ZOs8xvskpP-6H9Aw')
          .set('Content-Type', 'application/json')
          .send({"email":"cristian@controllerGetSingleList.com", "password":"Testing.09","name":"User virtual testing"});
          expect(respuesta.statusCode).toEqual(201);
          expect(respuesta.body.name).toEqual("User virtual testing");
        })
    });  
});
  