
module.exports = {
  analyze: (results, threshold) => {
    results = Array.isArray(results) ? results : [results]
    return Promise.resolve(results.some(r => r > threshold))
  }
}
