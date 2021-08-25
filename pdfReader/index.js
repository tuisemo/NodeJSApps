const fs = require('fs')
const PDFParser = require('pdf2json')

let pdfParser = new PDFParser(this, 1)

// 解析错误监听
pdfParser.on('pdfParser_dataError', (errData) =>
  console.error(errData.parserError)
)
// 解析完成监听
pdfParser.on('pdfParser_dataReady', (pdfData) => {
  // 写入为json文件
  fs.writeFile('../assets/pdf.json', JSON.stringify(pdfData), (error) => {
    console.log('🚀 ~ file: index.js ~ line 11 ~ fs.writeFile ~ error', error)
  })
  // 写入为txt纯文本文件
  fs.writeFile('../assets/pdf.txt', pdfParser.getRawTextContent(), (error) => {
    console.log('🚀 ~ file: index.js ~ line 11 ~ fs.writeFile ~ error', error)
  })
})

pdfParser.loadPDF('../assets/poem.pdf')
