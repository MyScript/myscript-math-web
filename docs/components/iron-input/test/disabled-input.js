import '../../polymer/polymer.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Polymer({
  _template: `
    <iron-input bind-value="{{myValue}}" invalid="{{myInvalid}}" id="input">
      <input disabled="">
    </iron-input>
`,

  is: 'disabled-input',

  properties: {
    myValue: {
      value: 'foo'
    },

    myInvalid: {
      value: false
    }
  }
});
