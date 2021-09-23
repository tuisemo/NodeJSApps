const axios = require('axios')
const iconv = require('iconv-lite')
/**
 *  对数组做随机排序
 */
const randomOrderArray = (arr) => {
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    let a = parseInt(Math.random() * (len - i - 1))
    a = a + i + 1
    let temp = arr[a]
    arr[a] = arr[i]
    arr[i] = temp
  }
  return arr
}
const user_agent_list = [
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1464.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.16 Safari/537.36',
  'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.3319.102 Safari/537.36',
  'Mozilla/5.0 (X11; CrOS i686 3912.101.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36',
  'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36',
  'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1667.0 Safari/537.36',
  'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:17.0) Gecko/20100101 Firefox/17.0.6',
  'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1468.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2224.3 Safari/537.36',
  'Mozilla/5.0 (X11; CrOS i686 3912.101.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36'
]
var cookie =
  'Y9o9_2132_forum_lastvisit=D_37_1632409091; Y9o9_2132_lastact=1632409091%09forum.php%09forumdisplay; Y9o9_2132_lastvisit=1632403275; Y9o9_2132_saltkey=ErWZ9P8S; Y9o9_2132_sid=c8TMFT; Y9o9_2132_st_t=0%7C1632409091%7C422b333cb493069037b259c34f1fcfec; Y9o9_2132_visitedfid=37'
const [UserAgent] = randomOrderArray(user_agent_list)
axios({
  method: 'get',
  url: 'https://www.91god.biz/forum-37-5.html',
  responseType: 'arraybuffer',
  headers: {
    // 'Content-Type': 'text/html;charset=gbk',
    cookie: cookie,
    'User-Agent': UserAgent
  }
})
  .then((res) => {
    // 获取服务器对客户端写入的cookie,用于更新下一次请求的cookie
    let res_cookie = res.headers['set-cookie']
    cookie = res_cookie.toString()
    // node环境下不支持GBK编码，需要转码处理
    const data = iconv.decode(res.data, 'gb2312')
    console.log('🚀 ~ file: index.js ~ line 7 ~ res', data)
  })
  .catch((err) => {
    console.log('🚀 ~ file: index.js ~ line 10 ~ err', err)
  })
