import '../polymer/polymer.js';
import { NeonAnimatableBehavior } from './neon-animatable-behavior.js';

export const NeonSharedElementAnimatableBehaviorImpl = {

  properties: {

    /**
     * A map of shared element id to node.
     */
    sharedElements: {
      type: Object,
      value: {}
    }

  }

};

export const NeonSharedElementAnimatableBehavior = [
  NeonAnimatableBehavior,
  NeonSharedElementAnimatableBehaviorImpl
];
