export const showError = (title) => {
  uni.showToast({
    title: title,
    duration: 5000,
  });
};

export const showToast = (title) => {
  uni.showToast({
    title: title,
    icon: "none",
    duration: 5000,
  });
};
