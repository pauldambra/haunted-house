const House = require('../House.js')
const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

describe('a house', function () {
  it('is haunted if the ghost detector ever detects more than three spooky units', function (done) {
    const house = new House({detect: () => 4})
    house.haunted()
      .then(isHaunted => {
        expect(isHaunted).to.be.true()
        done()
      })
      .catch(done)
  })

  it('is not haunted if the ghost detector never detects more than three spooky units', function (done) {
    const house = new House({detect: () => 3})
    house.haunted()
      .then(isHaunted => {
        expect(isHaunted).to.be.false()
        done()
      })
      .catch(done)
  })
})
