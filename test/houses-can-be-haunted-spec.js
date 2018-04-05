const House = require('../src/House.js')
const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

describe('a house', function () {
  it('is haunted if the ghost detector ever detects more than eight spooky units', function (done) {
    const house = new House([4, 4, 4, 9, 4])
    house.haunted()
      .then(isHaunted => {
        expect(isHaunted).to.be.true()
        done()
      })
      .catch(done)
  })

  it('is not haunted if the ghost detector never detects more than three spooky units', function (done) {
    const house = new House([[3, 3, 3, 3, 3, 3, 3, 3]])
    house.haunted()
      .then(isHaunted => {
        expect(isHaunted).to.be.false()
        done()
      })
      .catch(done)
  })
})
