const fs = require('fs')
const readline = require('readline')
// 业务
const tools = require('./index')

function translateFile(src, dist) {
  fs.readFile(src, (err, data) => {
    if (err) {
      console.log('🚀', err)
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