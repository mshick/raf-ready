function doneLoading () {
  return document.readyState !== 'loading';
}

function ready (fn) {
  var raf = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame;
  if (raf) {
    raf(window.setTimeout(fn, 0));
  } else if (doneLoading()) {
    fn();
  } else {
    document.addEventListener('readystatechange ', function onReadyStateChange(event) {
      if (doneLoading()) {
        event.target.removeEventListener('readystatechange', onReadyStateChange);
        fn();
      }
    });
  }
}

module.exports = ready;
