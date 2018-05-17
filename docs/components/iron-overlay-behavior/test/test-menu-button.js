import '../../polymer/polymer.js';
import './test-overlay.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <button id="trigger" on-click="toggle">Open</button>
    <test-overlay id="overlay">
      Composed overlay
      <button>button 1</button>
      <button>button 2</button>
    </test-overlay>
`,

  is: 'test-menu-button',

  toggle: function() {
    this.$.overlay.toggle();
  }
});
