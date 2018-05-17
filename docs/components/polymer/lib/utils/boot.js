import { Polymer as Polymer$0 } from '@polymer/polymer/lib/legacy/polymer-fn.js';

const userPolymer = Polymer$0;

export const Polymer = function(info) {
  return Polymer$0._polymerFn(info);
};

// support user settings on the Polymer object
if (userPolymer) {
  Object.assign(Polymer$0, userPolymer);
}

// To be plugged by legacy implementation if loaded
/* eslint-disable valid-jsdoc */
/**
 * @param {!PolymerInit} info Prototype for the custom element. It must contain
 *   an `is` property to specify the element name. Other properties populate
 *   the element prototype. The `properties`, `observers`, `hostAttributes`,
 *   and `listeners` properties are processed to create element features.
 * @return {!Object} Returns a custom element class for the given provided
 *   prototype `info` object. The name of the element if given by `info.is`.
 */
Polymer$0._polymerFn = function(info) { // eslint-disable-line no-unused-vars
  throw new Error('Load polymer.html to use the Polymer() function.');
};
/* eslint-enable */

Polymer$0.version = '2.6.0';

/* eslint-disable no-unused-vars */
/*
When using Closure Compiler, JSCompiler_renameProperty(property, object) is replaced by the munged name for object[property]
We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
*/
window.JSCompiler_renameProperty = function(prop, obj) {
  return prop;
};
/* eslint-enable */
