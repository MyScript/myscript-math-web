import { PolymerElement, html } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/iron-component-page/iron-component-page.js";
/* Extend the base PolymerElement class */

class Docs extends PolymerElement {
  /* Define a template for the new element */
  static get template() {
    return html`
      <style>
            iron-component-page {
                --iron-component-page-header-color: #1A9FFF;
            }
        </style>
     <iron-component-page></iron-component-page>
    `;
  }

}
/* Register the new element with the browser */


window.customElements.define('docs-app', Docs);