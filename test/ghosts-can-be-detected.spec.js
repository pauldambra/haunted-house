const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

const alwaysDetectThree = {
  detect: () => (Promise.resolve(3))
}

const ghostDetector = require('../src/ghostDetector.js').withSensor(alwaysDetectThree)

describe('the ghost detector', function () {
  it('generates one spookiness unit for each "hour" it is running', function (done) {
    ghostDetector
      .runForHours(7)
      .then(spookyReadings => {
        expect(spookyReadings.length).to.eql(7)
        spookyReadings.every(sr => expect(sr).to.eql(3))
        done()
      })
      .catch(done)
  })
})
