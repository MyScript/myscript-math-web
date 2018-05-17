import '../../polymer/polymer.js';
import { IronMenuBehavior } from '../iron-menu-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <slot></slot>

    <div id="extraContent" tabindex="-1">focusable extra content</div>
`,

  is: 'test-menu',
  behaviors: [IronMenuBehavior],

  get extraContent() {
    return this.$.extraContent;
  }
});
