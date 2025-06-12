import { expect } from 'chai';
import chaiHttp from 'chai-http';
import * as chai from 'chai'; // use namespace import
import app from '../index.js';

chai.default.use(chaiHttp); // Because chai is imported as a namespace

describe('GET /', () => {
  it('should return Hello World!', async () => {
    const res = await chai.default.request(app).get('/');
    expect(res).to.have.status(200);
    expect(res.text).to.equal('Hello World!');
  });
});

