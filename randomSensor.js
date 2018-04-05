
const zeroToTen = () => Math.floor(Math.random() * Math.floor(10))

module.exports = {
  detect: () => {
    const detectedValue = zeroToTen()
    return new Promise((resolve, reject) => {
      const timeToDetect = zeroToTen()
      setTimeout(() => resolve(detectedValue), zeroToTen())
    })
  }
}
