const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

const detectionResults = require('../src/detectionResults')

describe('ghost detection results', function () {
  it('can be a haunting', function (done) {
    detectionResults.analyze([1, 2, 3, 4], 2)
      .then(isHaunted => {
        expect(isHaunted).to.be.true()
        done()
      })
      .catch(done)
  })

  it('can be not a haunting', function (done) {
    detectionResults.analyze([1, 2, 2, 1], 3)
      .then(isHaunted => {
        expect(isHaunted).to.be.false()
        done()
      })
      .catch(done)
  })
})
