import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@polymer/iron-component-page';

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
