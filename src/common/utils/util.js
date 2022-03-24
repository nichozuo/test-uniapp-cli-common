const formatTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};
const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

var dateUtils = {
  UNITS: {
    年: 31557600000,
    月: 2629800000,
    天: 86400000,
    九天: 777600000,
    小时: 3600000,
    分钟: 60000,
    秒: 1000,
  },
  humanize: function (milliseconds) {
    var humanize = "";
    for (var key in this.UNITS) {
      if (milliseconds >= this.UNITS[key]) {
        humanize = Math.floor(milliseconds / this.UNITS[key]) + key + "前";
        break;
      }
    }
    return humanize || "刚刚";
  },
  format: function (dateStr) {
    var date = formatTime(new Date(dateStr));
    date = new Date(date);
    var diff = Date.now() - date.getTime();
    if (diff < this.UNITS["九天"]) {
      return this.humanize(diff);
    }
    var _format = function (number) {
      return number < 10 ? "0" + number : number;
    };
    return (
      date.getFullYear() +
      "/" +
      _format(date.getMonth() + 1) +
      "/" +
      _format(date.getDate()) +
      "-" +
      _format(date.getHours()) +
      ":" +
      _format(date.getMinutes())
    );
  },
  parse: function (str) {
    //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
    var a = str.split(/[^0-9]/);
    return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
  },
};

module.exports = {
  dateUtils: dateUtils,
  formatTime: formatTime,
};
