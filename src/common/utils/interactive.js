export const showError = (title) => {
  console.log("title", title);
  uni.showToast({
    title: title,
    duration: 3000,
    image: "/static/error.svg",
  });
};

export const showToast = (title) => {
  uni.showToast({
    title: title,
    icon: "none",
    duration: 2000,
  });
};
