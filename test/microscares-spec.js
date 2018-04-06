const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

const µs = require('../src/microscares')

describe('microscares', function () {
  it('can be converted to millispooks', function (done) {
    µs.toMillispooks(12000)
      .then(ms => {
        expect(ms).to.eql(12)
        done()
      })
      .catch(done)
  })
})
