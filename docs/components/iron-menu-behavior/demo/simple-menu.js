import '../../polymer/polymer.js';
import { IronMenuBehavior } from '../iron-menu-behavior.js';
import '../../paper-styles/color.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <style>
      :host > ::slotted(*) {
        display: block;
      }

      :host > ::slotted(.iron-selected) {
        color: white;
        background-color: var(--google-blue-500);
      }
    </style>

    <slot></slot>
`,

  is: 'simple-menu',
  behaviors: [IronMenuBehavior]
});
