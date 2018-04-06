const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

const House = require('../src/House.js')

describe('a house', function () {
  it('is haunted if the ghost detector detects a ghost', function (done) {
    const house = new House(true)
    house.haunted()
      .then(isHaunted => {
        expect(isHaunted).to.be.true()
        done()
      })
      .catch(done)
  })

  it('is not haunted if the ghost detector never detects a ghost', function (done) {
    const house = new House(false)
    house.haunted()
      .then(isHaunted => {
        expect(isHaunted).to.be.false()
        done()
      })
      .catch(done)
  })
})
