import Request from "luch-request";
import { showError } from "./interactive";

const actions = {
  add: () => {},
  sub: () => {},
};

const http = new Request({
  baseURL: process.env.HTTP_BASE_URL,
  method: "POST",
  // #ifdef H5 || APP-PLUS || MP-ALIPAY || MP-WEIXIN
  timeout: process.env.HTTP_TIMEOUT,
  // #endif
  // #ifdef APP-PLUS
  sslVerify: true,
  // #endif
  // #ifdef H5
  // 跨域请求时是否携带凭证（cookies）仅H5支持（HBuilderX 2.6.15+）
  withCredentials: false,
  // #endif
  // #ifdef APP-PLUS
  firstIpv4: false, // DNS解析时优先使用ipv4 仅 App-Android 支持 (HBuilderX 2.8.0+)
  // #endif
  // 局部优先级高于全局，返回当前请求的task,options。请勿在此处修改options。非必填
  // getTask: (task, options) => {
  // 相当于设置了请求超时时间500ms
  //   setTimeout(() => {
  //     task.abort()
  //   }, 500)
  // },
  // 全局自定义验证器。参数为statusCode 且必存在，不用判断空情况。
  validateStatus: (statusCode) => {
    // statusCode 必存在。此处示例为全局默认配置
    return statusCode >= 200 && statusCode < 300;
  },
});

http.interceptors.request.use(
  (config) => {
    actions.add();
    config.header = {
      ...config.header,
      Authorization:
        "Bearer " + uni.getStorageSync(process.env.ACCESS_TOKEN_KEY),
    };
    // 演示custom 用处
    // if (config.custom.auth) {
    //   config.header.token = 'token'
    // }
    // if (config.custom.loading) {
    //  uni.showLoading()
    // }
    /**
     /* 演示
     if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
        return Promise.reject(config)
      }
     **/
    return config;
  },
  (config) => {
    // 可使用async await 做异步操作
    actions.sub();
    return Promise.reject(config);
  }
);

http.interceptors.response.use(
  (response) => {
    /* 对响应成功做点什么 可使用async await 做异步操作*/
    //  if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
    //    return Promise.reject(response) // return Promise.reject 可使promise状态进入catch
    // if (response.config.custom.verification) { // 演示自定义参数的作用
    //   return response.data
    // }
    console.log("http response:::", response);
    actions.sub();
    const { code, message } = response.data;
    switch (code) {
      case 0:
        return response.data;
      case 10000:
        showError(message);
        return Promise.reject(response.data);
    }
  },
  (response) => {
    /*  对响应错误做点什么 （statusCode !== 200）*/
    console.log("http response error:::", response);
    actions.sub();
    console.log(response);
    return Promise.reject(response);
  }
);

export default http;
