import '../../polymer/polymer.js';
import '../web-animations.js';
import { NeonSharedElementAnimatableBehavior } from '../neon-shared-element-animatable-behavior.js';
import { IronResizableBehavior } from '../../iron-resizable-behavior/iron-resizable-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `

`,

  is: 'a-resizable-page',

  behaviors: [
    NeonSharedElementAnimatableBehavior,
    IronResizableBehavior
  ]
});

Polymer({
  _template: `

`,

  is: 'b-resizable-page',

  behaviors: [
    NeonSharedElementAnimatableBehavior,
    IronResizableBehavior
  ]
});

Polymer({
  _template: `

`,

  is: 'c-resizable-page',

  behaviors: [
    NeonSharedElementAnimatableBehavior,
    IronResizableBehavior
  ]
});
