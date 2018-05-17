import '../../polymer/polymer.js';
import './test-menu.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      .ghost, [hidden] {
        display: none !important;
      }
      .invisible {
        visibility: hidden;
      }
    </style>
    <test-menu id="actualMenu">
      <div>item 1</div>
      <div hidden="">item 2</div>
      <div class="ghost">item 3</div>
      <div class="invisible">item 3.1</div>
      <div>item 4</div>
      <div hidden="">item 5</div>
      <div class="ghost">item 6</div>
    </test-menu>
`,

  is: 'test-nested-menu'
});
