import '../polymer/polymer.js';
import { IronButtonState } from '../iron-behaviors/iron-button-state.js';
import { PaperRippleBehavior } from './paper-ripple-behavior.js';
import { IronControlState } from '../iron-behaviors/iron-control-state.js';
import { PaperInkyFocusBehaviorImpl as PaperInkyFocusBehaviorImpl$0 } from '@polymer/paper-behaviors/paper-inky-focus-behavior.js';

export const PaperInkyFocusBehaviorImpl = {
  observers: [
    '_focusedChanged(receivedFocusFromKeyboard)'
  ],

  _focusedChanged: function(receivedFocusFromKeyboard) {
    if (receivedFocusFromKeyboard) {
      this.ensureRipple();
    }
    if (this.hasRipple()) {
      this._ripple.holdDown = receivedFocusFromKeyboard;
    }
  },

  _createRipple: function() {
    var ripple = PaperRippleBehavior._createRipple();
    ripple.id = 'ink';
    ripple.setAttribute('center', '');
    ripple.classList.add('circle');
    return ripple;
  }
};

export const PaperInkyFocusBehavior = [
  IronButtonState,
  IronControlState,
  PaperRippleBehavior,
  PaperInkyFocusBehaviorImpl$0
];
