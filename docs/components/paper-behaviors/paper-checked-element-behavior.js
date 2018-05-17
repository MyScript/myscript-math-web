import '../polymer/polymer.js';
import { IronCheckedElementBehaviorImpl, IronCheckedElementBehavior } from '../iron-checked-element-behavior/iron-checked-element-behavior.js';
import { PaperInkyFocusBehavior } from './paper-inky-focus-behavior.js';
import { PaperRippleBehavior } from './paper-ripple-behavior.js';

export const PaperCheckedElementBehaviorImpl = {
  /**
   * Synchronizes the element's checked state with its ripple effect.
   */
  _checkedChanged: function() {
    IronCheckedElementBehaviorImpl._checkedChanged.call(this);
    if (this.hasRipple()) {
      if (this.checked) {
        this._ripple.setAttribute('checked', '');
      } else {
        this._ripple.removeAttribute('checked');
      }
    }
  },

  /**
   * Synchronizes the element's `active` and `checked` state.
   */
  _buttonStateChanged: function() {
    PaperRippleBehavior._buttonStateChanged.call(this);
    if (this.disabled) {
      return;
    }
    if (this.isAttached) {
      this.checked = this.active;
    }
  }
};

export const PaperCheckedElementBehavior = [
  PaperInkyFocusBehavior,
  IronCheckedElementBehavior,
  PaperCheckedElementBehaviorImpl
];
