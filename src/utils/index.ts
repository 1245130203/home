export const checkNetwork = async () => {
  // 检查是否处于ipv6环境
  const ipv6_res = await loadImage(
    "https://filebrowser.pi.simonsen666.top/static/img/logo.svg"
  );
  // 检查是否处于家庭内网
  const home_res = await loadImage(
    "http://192.168.0.254/luci-static/mcat/favicon.ico"
  );
  // const ipv4_res = await loadImage(
  //   "https://gw.alicdn.com/tfs/TB176rg4VP7gK0jSZFjXXc5aXXa-286-118.png"
  // );
  return {
    ipv6: ipv6_res,
    home: home_res,
    // ipv4: 200,
  };
};

export const loadImage = (address) => {
  return new Promise((resolve, reject) => {
    var img = new Image();
    var start = new Date().getTime();
    var hasFinish = false;
    img.onload = function () {
      if (!hasFinish) {
        hasFinish = true;
        console.log("Ping " + address + " success. ");
        clearTimer();
        resolve(200);
      }
    };
    img.onerror = function (err) {
      console.log("e", err);
      hasFinish = false;
      console.log("Ping " + address + " fail.. ");
      clearTimer();
      reject(500);
    };
    img.src = address + "/?" + start;
    let timer = setTimeout(() => {
      if (!hasFinish) {
        hasFinish = false;
        console.log(
          "There is a problem with your network, please refresh the page and try again."
        );
      }
    }, 1200);
    const clearTimer = () => {
      clearTimeout(timer);
      timer = null;
    };
  });
};
