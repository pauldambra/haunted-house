const µs = require('./microscares')
const detectionResults = require('./detectionResults')
/**
  The ghost detector uses the industry standard microscares detector
  but must repost to humans in millispooks. detection and conversion are both
  async

  This is a very skeptical ghost detector that must detect at least 8 millispooks before
  announcing there is a haunting
**/

module.exports = {
  withSensor: sensor => {
    return {
      runForHours: hours => {
        const eachHour = Array(hours).fill()

        return new Promise((resolve, reject) => {
          Promise.all(eachHour
            .map(_ => {
              return sensor.detect()
                .then(µs.toMillispooks)
                .then(ms => detectionResults.analyze(ms, 8))
            })
          )
            .then(resolve)
            .catch(reject)
        })
      }
    }
  }
}
