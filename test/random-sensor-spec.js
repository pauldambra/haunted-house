const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

const randomSensor = require('../src/randomSensor')

describe('the random sensor', function () {
  it('generates millispooks between zero and ten', function (done) {
    Promise.all(Array(100).fill()
      .map(randomSensor.detect)
    )
      .then(xs => {
        xs.every(x => {
          expect(x).to.be.within(0, 10000)
        })
        done()
      })
      .catch(done)
  })
})
