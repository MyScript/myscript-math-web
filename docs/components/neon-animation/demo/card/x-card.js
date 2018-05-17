import '../../../polymer/polymer.js';
import '../../../iron-flex-layout/iron-flex-layout.js';
import { NeonSharedElementAnimatableBehavior } from '../../neon-shared-element-animatable-behavior.js';
import { Polymer } from '../../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: block;
        overflow: hidden;
      }
      #placeholder {
        opacity: 0;
        background-color: grey;
        @apply --layout-fit;
      }
    </style>

    <div id="placeholder"></div>
    <div id="container">
      <slot name="div"></slot>
    </div>
`,

  is: 'x-card',

  behaviors: [
    NeonSharedElementAnimatableBehavior
  ],

  properties: {
    animationConfig: {
      type: Object
    },

    sharedElements: {
      type: Object
    }
  },

  attached: function() {
    if (this.animationConfig) {
      return;
    }

    this.animationConfig = {
      'entry': [{
        name: 'ripple-animation',
        id: 'ripple',
        toPage: this
      }, {
        name: 'fade-out-animation',
        node: this.$.placeholder,
        timing: {
          delay: 250
        }
      }, {
        name: 'fade-in-animation',
        node: this.$.container,
        timing: {
          delay: 50
        }
      }],

      'exit': [{
        name: 'fade-out-animation',
        node: this.$.container,
        timing: {
          duration: 0
        }
      }, {
        name: 'reverse-ripple-animation',
        id: 'reverse-ripple',
        fromPage: this
      }]
    };

    this.sharedElements = {
      'ripple': this.$.placeholder,
      'reverse-ripple': this.$.placeholder
    };
  }
});
