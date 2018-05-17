import '../polymer/polymer.js';
import { IronValidatableBehavior } from '../iron-validatable-behavior/iron-validatable-behavior.js';
import { IronFormElementBehavior } from '../iron-form-element-behavior/iron-form-element-behavior.js';

export const IronCheckedElementBehaviorImpl = {

  properties: {
    /**
     * Fired when the checked state changes.
     *
     * @event iron-change
     */

    /**
     * Gets or sets the state, `true` is checked and `false` is unchecked.
     */
    checked: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      notify: true,
      observer: '_checkedChanged'
    },

    /**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */
    toggles: {type: Boolean, value: true, reflectToAttribute: true},

    /* Overriden from Polymer.IronFormElementBehavior */
    value: {type: String, value: 'on', observer: '_valueChanged'}
  },

  observers: ['_requiredChanged(required)'],

  created: function() {
    // Used by `iron-form` to handle the case that an element with this behavior
    // doesn't have a role of 'checkbox' or 'radio', but should still only be
    // included when the form is serialized if `this.checked === true`.
    this._hasIronCheckedElementBehavior = true;
  },

  /**
   * Returns false if the element is required and not checked, and true
   * otherwise.
   * @param {*=} _value Ignored.
   * @return {boolean} true if `required` is false or if `checked` is true.
   */
  _getValidity: function(_value) {
    return this.disabled || !this.required || this.checked;
  },

  /**
   * Update the aria-required label when `required` is changed.
   */
  _requiredChanged: function() {
    if (this.required) {
      this.setAttribute('aria-required', 'true');
    } else {
      this.removeAttribute('aria-required');
    }
  },

  /**
   * Fire `iron-changed` when the checked state changes.
   */
  _checkedChanged: function() {
    this.active = this.checked;
    this.fire('iron-change');
  },

  /**
   * Reset value to 'on' if it is set to `undefined`.
   */
  _valueChanged: function() {
    if (this.value === undefined || this.value === null) {
      this.value = 'on';
    }
  }
};

export const IronCheckedElementBehavior = [
  IronFormElementBehavior,
  IronValidatableBehavior,
  IronCheckedElementBehaviorImpl
];
