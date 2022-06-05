require("dotenv").config();
const mongoose = require('mongoose');
const supertest = require("supertest");
const {app} = require("../../app");

const request = supertest(app);

const URI = "mongodb://localhost:27017";

describe("Test endpoints auth for login function", ()=>{

    // connet DB
  beforeAll(async () =>{
    await mongoose.connect(URI);
  })

  // Disconnet DB
  afterAll(async () =>{
    await mongoose.disconnect();
  }) 

   describe("Request POST to loggin into the system", ()=>{ 
        it("Should return a statuscode 200 and the token if goes well", async()=>{
          const respuesta = await request.post('/auth/local/login')
          .set('Content-Type', 'application/json')
          .send({"email":"corys90@gmail.com", "password":"Qwerty.009"});
          expect(respuesta.statusCode).toEqual(200);
        })
    });  

    describe("Request POST to loggin into the system", ()=>{ 
      it("Should return a token in body if goes well", async()=>{
        const respuesta = await request.post('/auth/local/login')
        .set('Content-Type', 'application/json')
        .send({"email":"corys90@gmail.com", "password":"Qwerty.009"});
        expect(respuesta.body.Bearer).not.toBeUndefined();
      });
    })  
});
  