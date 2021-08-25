const fs = require('fs')

function translateFile(src, dist) {
  fs.readFile(src, (err, data) => {
    if (err) {
      console.log('🚀', err)
	  return
    }
  })
}
