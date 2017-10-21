var request = require('request');
var base_url = "https://www.google.com/"
describe("get general info from server", function() {
  it("general info succeeded", function(done) {
    request.get(base_url, 
      function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
  });  
});