import '../polymer/polymer.js';
import { IronMenuBehavior } from '../iron-menu-behavior/iron-menu-behavior.js';
import '../paper-styles/default-theme.js';
import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,

  is: 'paper-listbox',
  behaviors: [IronMenuBehavior],

  /** @private */
  hostAttributes: {role: 'listbox'}
});
