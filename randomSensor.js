
const zeroToTen = () => Math.floor(Math.random() * Math.floor(10))

module.exports = {
  detect: () => {
    const detectedValue = zeroToTen()
    return new Promise((resolve, reject) => {
      const timeToDetect = zeroToTen()
      console.log(`took ${timeToDetect} milliseconds to detect this house is ${detectedValue} spooky`)
      setTimeout(() => resolve(detectedValue), zeroToTen())
    })
  }
}
