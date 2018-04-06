const Microscares = require('./Microscares')

/**
  The ghost detector uses the industry standard microscares detector
  but must repost to humans in millispooks. detection and conversion are both
  async
**/

module.exports = {
  withSensor: sensor => {
    return {
      runForHours: hours => {
        return new Promise((resolve, reject) => {
          Promise.all(Array(hours)
            .fill()
            .map(_ => sensor.detect()))
            .then(ghostDetections => {
              Promise.all(
                ghostDetections.map(gd => new Microscares(gd).toMillispooks())
              )
                .then(resolve)
            })
            .catch(reject)
        })
      }
    }
  }
}
