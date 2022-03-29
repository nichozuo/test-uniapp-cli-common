module.exports = {
  dev: {
    ACCESS_TOKEN_KEY: '"ACCESS_TOKEN"', // access_token本地存储的key
    HTTP_BASE_URL: '"http://0.0.0.0:8080/api/agent/"', // 请求的baseUrl
    HTTP_TIMEOUT: 100000, // 请求超时时间
    WECHAT_PROXY_LOGIN_URL:
      '"https://pulin-test.vankeservice.com/newfang/services/proxy/mp_proxy/login"', // 微信统一登录的跳转地址
    WECHAT_LAST_CODE_KEY: '"WECHAT_LAST_CODE"', // 微信统一登录返回的code的信息
  },
  uat: {
    ACCESS_TOKEN_KEY: '"ACCESS_TOKEN"', // access_token本地存储的key
    HTTP_BASE_URL: '"http://192.168.0.32:8000/api/agent/"', // 请求的baseUrl
    HTTP_TIMEOUT: 100000, // 请求超时时间
    WECHAT_PROXY_LOGIN_URL:
      '"https://pulin-test.vankeservice.com/newfang/services/proxy/mp_proxy/login"', // 微信统一登录的跳转地址
    WECHAT_LAST_CODE_KEY: '"WECHAT_LAST_CODE"', // 微信统一登录返回的code的信息
  },
  prod: {
    ACCESS_TOKEN_KEY: '"ACCESS_TOKEN"', // access_token本地存储的key
    HTTP_BASE_URL: '"http://192.168.9.109:8000/api/agent/"', // 请求的baseUrl
    HTTP_TIMEOUT: 100000, // 请求超时时间
    WECHAT_PROXY_LOGIN_URL:
      '"https://pulin-test.vankeservice.com/newfang/services/proxy/mp_proxy/login"', // 微信统一登录的跳转地址
    WECHAT_LAST_CODE_KEY: '"WECHAT_LAST_CODE"', // 微信统一登录返回的code的信息
  },
};
