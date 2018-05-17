import '../polymer/polymer.js';
import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        box-sizing: border-box;
        display: block;
        padding: 16px 24px;
      }

      .name {
        @apply --iron-doc-font-code;
        font-weight: bold;

        overflow: hidden;
        text-overflow: ellipsis;
        height: 20px;
      }

      [hidden] {
        display: none;
      }

      a {
        color: currentcolor;
        text-decoration: none;
      }

      a:hover {
        color: var(--iron-doc-accent-color-internal);
      }

      #description {
        margin-top: 6px;
      }
    </style>

    <div class="name">
      <a href\$="[[href]]">{{name}}</a>
    </div>
    <div id="description" hidden\$="[[!description]]">
      [[description]]
    </div>
`,

  is: 'iron-doc-summary',

  properties: {
    name: String,
    description: String,
    href: String,
  }
});
