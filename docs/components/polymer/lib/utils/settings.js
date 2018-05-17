import './boot.js';
import { pathFromUrl } from './resolve-url.js';
import { rootPath as rootPath$0, setRootPath as setRootPath$0, sanitizeDOMValue as sanitizeDOMValue$0, setSanitizeDOMValue as setSanitizeDOMValue$0, setPassiveTouchGestures as setPassiveTouchGestures$0 } from '@polymer/polymer/lib/utils/settings.js';
export const useShadow = !(window.ShadyDOM);
export const useNativeCSSProperties = Boolean(!window.ShadyCSS || window.ShadyCSS.nativeCss);
export const useNativeCustomElements = !(window.customElements.polyfillWrapFlushCallback);


/**
 * Globally settable property that is automatically assigned to
 * `Polymer.ElementMixin` instances, useful for binding in templates to
 * make URL's relative to an application's root.  Defaults to the main
 * document URL, but can be overridden by users.  It may be useful to set
 * `Polymer.rootPath` to provide a stable application mount path when
 * using client side routing.
 *
 * @memberof Polymer
 */
let rootPath = rootPath$0 ||
  pathFromUrl(document.baseURI || window.location.href);

setRootPath$0(rootPath);

export const setRootPath = function(path) {
  setRootPath$0(path);
};

/**
 * A global callback used to sanitize any value before inserting it into the DOM. The callback signature is:
 *
 *     Polymer = {
 *       sanitizeDOMValue: function(value, name, type, node) { ... }
 *     }
 *
 * Where:
 *
 * `value` is the value to sanitize.
 * `name` is the name of an attribute or property (for example, href).
 * `type` indicates where the value is being inserted: one of property, attribute, or text.
 * `node` is the node where the value is being inserted.
 *
 * @type {(function(*,string,string,Node):*)|undefined}
 * @memberof Polymer
 */
let sanitizeDOMValue = sanitizeDOMValue$0;

// This is needed for tooling
setSanitizeDOMValue$0(sanitizeDOMValue);

export const setSanitizeDOMValue = function(newSanitizeDOMValue) {
  setSanitizeDOMValue$0(newSanitizeDOMValue);
};

/**
 * Globally settable property to make Polymer Gestures use passive TouchEvent listeners when recognizing gestures.
 * When set to `true`, gestures made from touch will not be able to prevent scrolling, allowing for smoother
 * scrolling performance.
 * Defaults to `false` for backwards compatibility.
 *
 * @memberof Polymer
 */
let passiveTouchGestures = false;

setPassiveTouchGestures$0(passiveTouchGestures);

export const setPassiveTouchGestures = function(usePassive) {
  setPassiveTouchGestures$0(usePassive);
};
