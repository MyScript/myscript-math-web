import '../../polymer/polymer.js';
import { IronMenubarBehavior } from '../iron-menubar-behavior.js';
import '../../paper-styles/color.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <style>
      :host > ::slotted(*) {
        display: inline-block;
      }

      :host > ::slotted(.iron-selected) {
        color: white;
        background-color: var(--google-red-500);
      }
    </style>

    <slot></slot>
`,

  is: 'simple-menubar',
  behaviors: [IronMenubarBehavior]
});
