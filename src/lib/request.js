const axios = require('axios')
const message = require('./message')
const { assignOption } = require('./utils')

const defaultOptions = {
  method: 'GET',
  data: {},
  params: {},
    headers: {
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'origin': 'https://juejin.cn',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://juejin.cn/',
        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  },
}

module.exports = function request(options) {
  return new Promise((resolve, reject) => {
    axios(assignOption(defaultOptions, options))
      .then((res) => {
        let data = res.data || {}
        if (data.err_no === 0) {
          resolve(data.data)
        } else {
          message(data.err_msg)
          reject(data)
        }
      })
      .catch((err) => {
        message(err.message)
        reject(err)
      })
  })
}

