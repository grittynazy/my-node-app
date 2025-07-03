const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

const expect = chai.expect;
chai.use(chaiHttp);

describe('GET /', () => {
  it('should return HTML with Hello, AWS EC2!', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include('Hello, AWS EC2!');
        done();
      });
  });
});

