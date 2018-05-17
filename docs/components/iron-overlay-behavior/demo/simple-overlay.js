import '../../polymer/polymer.js';
import { IronOverlayBehavior } from '../iron-overlay-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <style>
      :host {
        background: white;
        color: black;
        padding: 24px;
        box-shadow: rgba(0, 0, 0, 0.24) -2px 5px 12px 0px, rgba(0, 0, 0, 0.12) 0px 0px 12px 0px;
      }
    </style>
    <slot></slot>
`,

  is: 'simple-overlay',

  behaviors: [
    IronOverlayBehavior
  ]
});
