const sensor = require('./src/randomSensor')
const House = require('./src/house')

const ghostDetector = require('./src/ghostDetector')
  .withSensor(sensor)

console.log('Who ya gonna call?')

const ghostDetective = address => {
  console.log(`visiting house number ${address}`)

  ghostDetector
    .runForHours(7)
    .then(detections => {
      new House(detections)
        .haunted()
        .then(x => {
          const result = x ? '' : 'not'
          console.log(`after 7 hours I can tell you that house number ${address} is ${result} haunted`)
        })
        .catch(console.log)
    })
}

Array(10).fill().forEach((_, i) => {
  ghostDetective(i)
})
