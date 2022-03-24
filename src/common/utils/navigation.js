export const getQueryFromOptions = (options) => {
  let query = "?";
  let i = 0;
  Object.keys(options).forEach((key) => {
    if (i != 0) query += "&";
    i++;
    query += key + "=" + options[key];
  });
  console.log(query);
  return query;
};

export const relaunchBack = (delta) => {
  const route = getCurrentPages();
  const length = route.length;
  const target = length - 1 - delta;
  console.log(target);
  const page = route[target];
  const url =
    page.route.replace("pages/", "") + getQueryFromOptions(page.options);
  console.log(page, page.route, page.options, url);
  uni.reLaunch({
    url: url,
    fail(err) {
      console.log(err);
    },
  });
};

export const go = (url) => {
  const tabPages = [
    "work/index",
    "stock/index",
    "customer/index",
    "order/index",
    "more/index",
  ];
  const isTab = tabPages.includes(url);
  url = "/pages/" + url;

  if (isTab) {
    uni.switchTab({
      url: url,
    });
  } else {
    uni.navigateTo({
      url: url,
    });
  }
};
