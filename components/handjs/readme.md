# Hand.js

Starting in September 2012, Microsoft proposed a specification for unifying touch, pen and mouse events called pointer events.

Modern browsers are not yet all supporting it right. Only Internet Explorer 10+ and Microsoft Edge support it.

Hand.js is a polyfill that will allow you to write your code about touch only once even if the browser does not support pointer events.

Write once, use it everywhere! Don't bother with mouse and touch events. Pointer events are here for you.

You can find a test page right here: http://www.catuhe.com/msdn/handjs/index.html

Hand.js supports the following;

* Works on IE9+, Chrome, Firefox, Opera, Safari
* Support for:
 * pointerdown
 * pointermove
 * pointerup
 * pointercancel
 * pointerenter
 * pointerleave
 * pointerout
 * pointerover
* Fallback to mouse
* CSS analysis to support touch-action:none (can be disabled with HANDJS.doNotProcessCSS = true; )
* Seamless integration into your pages

You can also find a complete blog about hand.js: http://blogs.msdn.com/b/eternalcoding/archive/2013/01/16/hand-js-a-polyfill-for-supporting-pointer-events-on-every-browser.aspx

Another article about pointer events and hand.js: http://blogs.msdn.com/b/davrous/archive/2013/02/20/handling-touch-in-your-html5-apps-thanks-to-the-pointer-events-of-ie10-and-windows-8.aspx
