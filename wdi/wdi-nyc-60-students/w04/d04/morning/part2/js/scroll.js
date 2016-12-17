function scrollTo(element, top, duration) {

  let distance = top - element.scrollTop();
  let perTick = distance / duration * 10;

  let clearScroll = setInterval(() => {
    if (duration < 0 || element.scrollTop === top) {
      clearInterval(clearScroll);
    } else {
      duration -= 10;
      element.scrollTop(element.scrollTop() + perTick);
    }
  }, 10);
}