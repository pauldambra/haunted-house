
module.exports = class House {
  constructor (ghostDetections) {
    this.isHaunted = ghostDetections
      .some(millispooks => millispooks > 8)
  }

  haunted () {
    return Promise.resolve(this.isHaunted)
  }
}
