
module.exports = class House {
  constructor (isHaunted) {
    this.isHaunted = isHaunted
  }

  haunted () {
    return Promise.resolve(this.isHaunted)
  }
}
