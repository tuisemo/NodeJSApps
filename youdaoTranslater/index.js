const axios = require('axios')
const CryptoJS = require('crypto-js')

var appKey = ''
var key = '' //注意：暴露appSecret，有被盗用造成损失的风险
var from = 'zh-CHS'
var to = 'en'
var vocabId = '您的用户词表ID'

function youdaoTranslater(query) {
  var salt = new Date().getTime()
  var curtime = Math.round(new Date().getTime() / 1000)
  var str1 = appKey + truncate(query) + salt + curtime + key
  var sign = CryptoJS.SHA256(str1).toString(CryptoJS.enc.Hex)

  return axios({
    method: 'post',
    url: 'http://openapi.youdao.com/api',
    data: {
      q: query,
      appKey: appKey,
      salt: salt,
      from: from,
      to: to,
      sign: sign,
      signType: 'v3',
      curtime: curtime,
      vocabId: vocabId
    }
  })
}
function truncate(q) {
  var len = q.length
  if (len <= 20) return q
  return q.substring(0, 10) + len + q.substring(len - 10, len)
}
module.exports = {
  youdaoTranslater
}
