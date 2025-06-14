// test/app.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // If you're exporting app from index.js

const expect = chai.expect;
chai.use(chaiHttp);

describe('GET /', () => {
  it('should return Hello World!', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello World!');
        done();
      });
  });
});

