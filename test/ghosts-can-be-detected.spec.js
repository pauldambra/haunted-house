const ghostDetector = require('../ghostDetector.js')
const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

/**

    Promise.all(Array(10)
      .fill()
      .map(_ => ghostDetector.detect()))
      .then(ghostDetections => {
        console.log(ghostDetections)

      })
      .catch(console.log)

**/

describe('the ghost detector', function () {
  it('generates one spookiness unit for each "hour" it is running', function (done) {
    ghostDetector.runForHours(7)
      .then(spookyReadings => {
        expect(spookyReadings.length).to.eql(7)
        done()
      })
      .catch(done)
  })
})
