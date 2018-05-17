import '../../polymer/polymer.js';
import { IronOverlayBehavior, IronOverlayBehaviorImpl } from '../iron-overlay-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <style>
      :host {
        background: white;
        color: black;
        border: 1px solid black;
      }

      :host([animated]) {
        -webkit-transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        -webkit-transform: translateY(300px);
        transform: translateY(300px);
      }

      :host(.opened[animated]) {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
      }
    </style>

    <slot></slot>
`,

  is: 'test-overlay',

  properties: {
    animated: {
      type: Boolean,
      reflectToAttribute: true
    }
  },

  behaviors: [
    IronOverlayBehavior
  ],

  listeners: {
    'transitionend': '__onTransitionEnd'
  },

  _renderOpened: function() {
    if (this.animated) {
      if (this.withBackdrop) {
        this.backdropElement.open();
      }
      this.classList.add('opened');
      this.fire('simple-overlay-open-animation-start');
    } else {
      IronOverlayBehaviorImpl._renderOpened.apply(this, arguments);
    }
  },

  _renderClosed: function() {
    if (this.animated) {
      if (this.withBackdrop) {
        this.backdropElement.close();
      }
      this.classList.remove('opened');
      this.fire('simple-overlay-close-animation-start');
    } else {
      IronOverlayBehaviorImpl._renderClosed.apply(this, arguments);
    }
  },

  __onTransitionEnd: function(e) {
    if (e && e.target === this) {
      if (this.opened) {
        this._finishRenderOpened();
      } else {
        this._finishRenderClosed();
      }
    }
  }
});
