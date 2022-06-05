require("dotenv").config();
const mongoose = require('mongoose');
const supertest = require("supertest");
const {app} = require("../../app");

const request = supertest(app);

const URI = "mongodb://localhost:27017";

describe("Test endpoints about manage fav list ", ()=>{

    // connet DB
  beforeAll(async () =>{
    await mongoose.connect(URI);
  })

  // Disconnet DB
  afterAll(async () =>{
    await mongoose.disconnect();
  }) 

  describe("Request POST to create a new fav lists of fav", ()=>{ 
      it("Should return a statuscode 200 and the user list", async()=>{
        const respuesta = await request.post('/api/fav')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.Y29yeXM5MEBnbWFpbC5jb20.EJd-GySORX9_MgjAr1uioT7kFZ3ZOs8xvskpP-6H9Aw')
        .set('Content-Type', 'application/json')
        .send({"favList":[],"id_user":"627bed42993c77e6214e040a","name":"testing"});
        expect(respuesta.statusCode).toEqual(201);
      })
  });

  describe("Request POST to create a new fav lists of fav", ()=>{ 
    it("Should return a statuscode 200 and name of list created", async()=>{
      const respuesta = await request.post('/api/fav/')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.Y29yeXM5MEBnbWFpbC5jb20.EJd-GySORX9_MgjAr1uioT7kFZ3ZOs8xvskpP-6H9Aw')
      .send({"favList":[],"id_user":"629b844068feebc395856a40","name":"zapatos"});
      expect(respuesta.statusCode).toEqual(201);
      expect(respuesta.body.name).toEqual("zapatos");
    })
  });

  describe("Request GET to obtain fav lists all users", ()=>{ 
    it("Should return a statuscode 200 and all user fav list", async()=>{
        const respuesta = await request.get('/api/fav/')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.Y29yeXM5MEBnbWFpbC5jb20.EJd-GySORX9_MgjAr1uioT7kFZ3ZOs8xvskpP-6H9Aw')
        .send();
        expect(respuesta.statusCode).toEqual(200);
    })
  });

  describe("Request GET to obtain fav lists all users", ()=>{ 
    const fav = [];
    it("Should return a statuscode 200 and fav list in array form", async()=>{
      const respuesta = await request.get('/api/fav/')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.Y29yeXM5MEBnbWFpbC5jb20.EJd-GySORX9_MgjAr1uioT7kFZ3ZOs8xvskpP-6H9Aw')
      .send();
      expect(respuesta.statusCode).toEqual(200);
      expect(typeof respuesta.body).toEqual(typeof fav);
    })
  });

  describe("Request GET to obtain unique fav lists of specific user", ()=>{ 
    it("Should return a statuscode 200 and the user list", async()=>{
      const respuesta = await request.get('/api/fav/627bf022e21fbc5ee7df88de')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.Y29yeXM5MEBnbWFpbC5jb20.EJd-GySORX9_MgjAr1uioT7kFZ3ZOs8xvskpP-6H9Aw')
      .send();
      expect(respuesta.statusCode).toEqual(200);
    })
  });

  describe("Request GET to obtain unique fav lists of specific user", ()=>{ 
    it("Should return a statuscode 200 and the user called ", async()=>{
      const respuesta = await request.get('/api/fav/629d1e72ad25b39ebdac1b0e')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.Y29yeXM5MEBnbWFpbC5jb20.EJd-GySORX9_MgjAr1uioT7kFZ3ZOs8xvskpP-6H9Aw')
      .send();
      expect(respuesta.statusCode).toEqual(200);
      expect(respuesta.body.item.name).toEqual("Libros");
    })
  });

  describe("Request DELETE to erase a specific user fav lists by its id", ()=>{ 
    it("Should return a statuscode 200 ", async()=>{
      const respuesta = await request.delete('/api/fav/629d21f43cabe9aa1121b170')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.Y29yeXM5MEBnbWFpbC5jb20.EJd-GySORX9_MgjAr1uioT7kFZ3ZOs8xvskpP-6H9Aw')
      .send();
      expect(respuesta.statusCode).toEqual(200);
    })
  });    
});
  