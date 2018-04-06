
module.exports = class Microscares {
  constructor (microscares) {
    this.millispooks = microscares / 1000
  }

  toMillispooks () {
    return Promise.resolve(this.millispooks)
  }
}
