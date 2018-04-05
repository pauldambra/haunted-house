
module.exports = {
  withSensor: sensor => {
    return {
      runForHours: hours => {
        return new Promise((resolve, reject) => {
          Promise.all(Array(hours)
            .fill()
            .map(_ => sensor.detect()))
            .then(ghostDetections => {
              resolve(ghostDetections)
            })
            .catch(reject)
        })
      }
    }
  }
}
