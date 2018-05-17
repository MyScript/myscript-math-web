import '../polymer/polymer.js';
import { Polymer as Polymer$0 } from '../polymer/lib/legacy/polymer-fn.js';
import { IronA11yAnnouncer as IronA11yAnnouncer$0 } from '@polymer/iron-a11y-announcer/iron-a11y-announcer.js';

export const IronA11yAnnouncer = Polymer$0({
  _template: `
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live\$="[[mode]]">[[_text]]</div>
`,

  is: 'iron-a11y-announcer',

  properties: {

    /**
     * The value of mode is used to set the `aria-live` attribute
     * for the element that will be announced. Valid values are: `off`,
     * `polite` and `assertive`.
     */
    mode: {
      type: String,
      value: 'polite'
    },

    _text: {
      type: String,
      value: ''
    }
  },

  created: function() {
    if (!IronA11yAnnouncer$0.instance) {
      IronA11yAnnouncer$0.instance = this;
    }

    document.body.addEventListener('iron-announce', this._onIronAnnounce.bind(this));
  },

  /**
   * Cause a text string to be announced by screen readers.
   *
   * @param {string} text The text that should be announced.
   */
  announce: function(text) {
    this._text = '';
    this.async(function() {
      this._text = text;
    }, 100);
  },

  _onIronAnnounce: function(event) {
    if (event.detail && event.detail.text) {
      this.announce(event.detail.text);
    }
  }
});

IronA11yAnnouncer$0.instance = null;

IronA11yAnnouncer$0.requestAvailability = function() {
  if (!IronA11yAnnouncer$0.instance) {
    IronA11yAnnouncer$0.instance = document.createElement('iron-a11y-announcer');
  }

  document.body.appendChild(IronA11yAnnouncer$0.instance);
};
