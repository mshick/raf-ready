# raf-ready

Fire a callback when the DOM is ready. Prefers `requestAnimationFrame` and falls
back to `document.readyState`.

## Install

```sh
npm install --save raf-ready
```

## Usage

```js
import ready from 'raf-ready';

ready(() => {
  // do something with the DOM.
});
```

## API

### ready(callback)

Fires `callback` using available approach.

#### callback

Type: `function`

## Reference

* [Google PageSpeed Insight - Optimize CSS Delivery](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery)
* [How to wait for DOM elements to show up in modern browsers](https://swizec.com/blog/how-to-properly-wait-for-dom-elements-to-show-up-in-modern-browsers/swizec/6663)
