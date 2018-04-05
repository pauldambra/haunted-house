
module.exports = class House {
  constructor (ghostDetector) {
    this.isHaunted = Array(10)
      .fill()
      .map(_ => ghostDetector.detect())
      .some(millispooks => millispooks > 3)
  }

  haunted () {
    return this.isHaunted
  }
}
