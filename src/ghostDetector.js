const µs = require('./microscares')

/**
  The ghost detector uses the industry standard microscares detector
  but must repost to humans in millispooks. detection and conversion are both
  async
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
            })
          )
            .then(resolve)
            .catch(reject)
        })
      }
    }
  }
}
