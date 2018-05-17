import '../polymer/polymer.js';
import './iron-doc-viewer-styles.js';
import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style include="iron-doc-viewer-styles">
      :host {
        padding: 16px;
      }

      a {
        background-color: #eee;
        display: block;
        padding: 15px;
        border-radius: 5px;
        text-align: center;
        text-decoration: none;
        color: #1565c0;
      }

      a:hover {
        color: var(--iron-doc-accent-color-internal);
      }
    </style>

    <a href="" on-tap="_toggle">
      <span hidden\$="[[visible]]">Show</span>
      <span hidden\$="[[!visible]]">Hide</span>
      <span><slot></slot></span>
    </a>
`,

  is: 'iron-doc-hide-bar',

  properties: {
    visible: {
      type: Boolean,
      value: false,
      notify: true
    }
  },

  _toggle: function(ev) {
    ev.preventDefault();
    this.visible = !this.visible;
  }
});
