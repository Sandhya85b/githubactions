const { default: mongoose } = require("mongoose");
const app = require("./index");
const request = require("supertest");

afterAll(async()=>{
    await mongoose.connect
})

test(`Testing home Route`, async () => {
  const res = await request(app).get("/home");
  expect(res.statusCode).toBe(200);
  expect(res.body.msg).toBe("This is get route");
});
test(`Getting task by id`, async () => {
let res1=await request(app).post("/tasks/add").send
});

