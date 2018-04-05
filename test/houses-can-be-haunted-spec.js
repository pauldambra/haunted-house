const House = require('../House.js')
const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

describe('a house', function () {
  it('is haunted if the ghost detector ever detects more than three spooky units', function () {
    const house = new House({detect: () => 4})
    expect(house.haunted()).to.be.true()
  })

  it('is not haunted if the ghost detector never detects more than three spooky units', function () {
    const house = new House({detect: () => 3})
    expect(house.haunted()).to.be.false()
  })
})
