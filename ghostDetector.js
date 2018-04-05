
const detectGhosts = () => {
  return 3
}

module.exports = {
  runForHours: hours => {
    return new Promise((resolve, reject) => {
      Promise.all(Array(hours)
        .fill()
        .map(_ => detectGhosts()))
        .then(ghostDetections => {
          resolve(ghostDetections)
        })
        .catch(reject)
    })
  }
}
