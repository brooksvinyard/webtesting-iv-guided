const request = require("supertest");
const server = require("./server.js");

// testing endpoints
// returns correct http ststus code
describe("server.js", () => {
  describe("GET /", () => {
    /////////////////////////////////////////
    it.skip("should respond with 200 OK", () => {
      return request(server) // with return jest will wait for the promise before testing
        .get("/")
        .then(response => {
          expect(response.status).toBe(200);
        })
        .catch();
    });

    it.skip("should respond with 200: async / await", async () => {
      const response = await request(server).get("/");
      expect(response.status).toBe(200);
    });

    it.skip("should respond with 200: done", done => {
        request(server).get("/").then(response => {
            expect(response.status).toBe(200);
          })
    });

    // OR DO THIS SHORTER VERSION
    it("should get 200", () => {
      return request(server)
        .get("/")
        .expect(200);
    });

    /////////////////////////////////////////
    // Test for JSON
    it("should return JSON", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });

    // OR DO THIS SHORTER VERSION
    it("should get JSON", () => {
      return request(server)
        .get("/")
        .expect("Content-Type", /json/);
    });
    /////////////////////////////////////////

    it("should get return {api: 'up' }", () => {
        return request(server)
          .get("/").then(res => {
              expect(res.body).toEqual({ api: 'up' });
          });
      });

  });
});
