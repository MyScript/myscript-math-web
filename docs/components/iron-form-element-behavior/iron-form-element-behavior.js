import '../polymer/polymer.js';
import { Element } from '../polymer/polymer-element.js';

export const IronFormElementBehavior = {

  properties: {
    /**
     * Fired when the element is added to an `iron-form`.
     *
     * @event iron-form-element-register
     */

    /**
     * Fired when the element is removed from an `iron-form`.
     *
     * @event iron-form-element-unregister
     */

    /**
     * The name of this element.
     */
    name: {
      type: String
    },

    /**
     * The value for this element.
     * @type {string|number|null|undefined}
     */
    value: {
      notify: true,
      type: String
    },

    /**
     * Set to true to mark the input as required. If used in a form, a
     * custom element that uses this behavior should also use
     * Polymer.IronValidatableBehavior and define a custom validation method.
     * Otherwise, a `required` element will always be considered valid.
     * It's also strongly recommended to provide a visual style for the element
     * when its value is invalid.
     */
    required: {
      type: Boolean,
      value: false
    },

    /**
     * The form that the element is registered to.
     */
    _parentForm: {
      type: Object
    }
  },

  attached() {
    if (!Element) {
      // Note: the iron-form that this element belongs to will set this
      // element's _parentForm property when handling this event.
      this.fire('iron-form-element-register');
    }
  },

  detached() {
    if (!Element && this._parentForm) {
      this._parentForm.fire('iron-form-element-unregister', {target: this});
    }
  }

};
