
const zeroToTen = () => Math.floor(Math.random() * Math.floor(10))
const readMicroscares = () => zeroToTen() * 1000
/**
The detection equipment we use outputs microscares. We can't change this and need to convert it to millispooks
**/
module.exports = {
  detect: () => {
    const detectedValue = readMicroscares()
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(detectedValue), zeroToTen())
    })
  }
}
