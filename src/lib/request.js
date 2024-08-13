const axios = require('axios')
const message = require('./message')
const { assignOption } = require('./utils')

const defaultOptions = {
  method: 'GET',
  data: {},
  params: {},
  headers: {
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

//
//     origin: https://juejin.cn
//     pragma: no-cache
//     referer: https://juejin.cn/
//     sec-ch-ua: "Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"
//     sec-ch-ua-mobile: ?0
//     sec-fetch-dest: empty
//     sec-fetch-mode: cors
//     sec-fetch-site: same-site
//     User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36
//
// curl 'https://api.juejin.cn/growth_api/v1/check_in?aid=2608&uuid=6953442233299682829&spider=0&msToken=kXzCpKz3CUD2tI9Dm9oEGGxbsmQZ6oHUPIv_FdkgU0bgUDx3cU3hvhaJbXychFN-UAlKtb12N4yE_OMwcY2TQqFjR0dAfqKvB4juIr2g93w5FHuqWp3Le6U0BoffDqM%3D&a_bogus=DfsOXOZVMsm1SwVdzwkz9jDEJhD0YW5%2FgZENEmthStLD' \
//   -H 'accept: */*' \
//   -H 'accept-language: zh-CN,zh;q=0.9,en;q=0.8' \
//   -H 'cache-control: no-cache' \
//   -H 'content-type: application/json' \
//   -H 'cookie: __tea_cookie_tokens_2608=%257B%2522user_unique_id%2522%253A%25226953442233299682829%2522%252C%2522web_id%2522%253A%25226953442233299682829%2522%252C%2522timestamp%2522%253A1642647427793%257D; _tea_utm_cache_2018={%22utm_source%22:%22gold_browser_extension%22}; n_mh=0yzsIGOIiiBDdCo7FXwizQqQfA0TtzmSYQX0SGCfSn0; sid_guard=527fe345f3aacb5d403205e0c9d2fe05%7C1716513284%7C31536000%7CSat%2C+24-May-2025+01%3A14%3A44+GMT; uid_tt=9ed59a5243536134194f0ac164d8c032; uid_tt_ss=9ed59a5243536134194f0ac164d8c032; sid_tt=527fe345f3aacb5d403205e0c9d2fe05; sessionid=527fe345f3aacb5d403205e0c9d2fe05; sessionid_ss=527fe345f3aacb5d403205e0c9d2fe05; sid_ucp_v1=1.0.0-KDllMTNmN2U3MmRlYzk3NzU1MmVhNWUxNThlODM5N2FjM2RjYzI1MmYKFgioksC-_fUFEITUv7IGGLAUOAJA7wcaAmxxIiA1MjdmZTM0NWYzYWFjYjVkNDAzMjA1ZTBjOWQyZmUwNQ; ssid_ucp_v1=1.0.0-KDllMTNmN2U3MmRlYzk3NzU1MmVhNWUxNThlODM5N2FjM2RjYzI1MmYKFgioksC-_fUFEITUv7IGGLAUOAJA7wcaAmxxIiA1MjdmZTM0NWYzYWFjYjVkNDAzMjA1ZTBjOWQyZmUwNQ; store-region=cn-sd; store-region-src=uid; _tea_utm_cache_2608={%22utm_source%22:%22gold_browser_extension%22}; csrf_session_id=cda751ea08bf14d1e7d505ff8e7507d9; _tea_utm_cache_576092={%22utm_source%22:%22gold_browser_extension%22}' \
//   -H 'origin: https://juejin.cn' \
//   -H 'pragma: no-cache' \
//   -H 'priority: u=1, i' \
//   -H 'referer: https://juejin.cn/' \
//   -H 'sec-ch-ua: "Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "macOS"' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-site: same-site' \
//   -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36' \
//   -H 'x-secsdk-csrf-token: 000100000001f6f68968fc8ed935c8a97c475923ba31d3566889fea880f609388f675fa50daf17eb3bcefe8edcaa' \
//   --data-raw '{}'