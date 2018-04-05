const ghostDetector = require('../ghostDetector.js')
const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

describe('the ghost detector', function () {
  it('generates one spookiness unit for each "hour" it is running', function (done) {
    ghostDetector
      .withSensor({
        detect: () => {
          return Promise.resolve(3)
        }})
      .runForHours(7)
      .then(spookyReadings => {
        expect(spookyReadings.length).to.eql(7)
        done()
      })
      .catch(done)
  })
})
