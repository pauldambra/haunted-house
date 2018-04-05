
const zeroToTen = () => Math.floor(Math.random() * Math.floor(10))

module.exports = {
  detect: () => {
    const detectedValue = zeroToTen()
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(detectedValue), zeroToTen())
    })
  }
}
