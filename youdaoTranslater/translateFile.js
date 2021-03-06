const fs = require('fs')
const readline = require('readline')
// δΈε‘
const tools = require('./index')

function translateFile(src, dist) {
  fs.readFile(src, (err, data) => {
    if (err) {
      console.log('π', err)
      return
    }
  })
}

function translateFileByLine(src) {
  const rl = readline.createInterface({
    input: fs.createReadStream(src)
  })

  rl.on('line', (line) => {
    tools.youdaoTranslater(line).then((data) => {
      console.log(`${line}`, data)
    })
  })
}

translateFileByLine('../assets/pdf.txt')