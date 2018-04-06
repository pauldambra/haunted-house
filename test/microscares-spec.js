const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

const Microscares = require('../src/Microscares')

describe('microscares', function () {
  it('can be converted to millispooks', function (done) {
    new Microscares(12000)
      .toMillispooks()
      .then(ms => {
        expect(ms).to.eql(12)
        done()
      })
      .catch(done)
  })
})
