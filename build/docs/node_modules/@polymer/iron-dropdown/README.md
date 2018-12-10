[![Published on NPM](https://img.shields.io/npm/v/@polymer/iron-dropdown.svg)](https://www.npmjs.com/package/@polymer/iron-dropdown)
[![Build status](https://travis-ci.org/PolymerElements/iron-dropdown.svg?branch=master)](https://travis-ci.org/PolymerElements/iron-dropdown)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/iron-dropdown)

## &lt;iron-dropdown&gt;

`<iron-dropdown>` displays content inside a fixed-position container,
positioned relative to another element.

See: [Documentation](https://www.webcomponents.org/element/@polymer/iron-dropdown),
 [Demo](https://www.webcomponents.org/element/@polymer/iron-dropdown/demo/demo/index.html).

## Usage

### Installation

```
npm install --save @polymer/iron-dropdown
```

### In an HTML file

```html
<html>
  <head>
    <script type="module">
      import '@polymer/iron-dropdown/iron-dropdown.js';
    </script>
    <style>
      #container {
        display: inline-block;
      }

      iron-dropdown {
        border: 1px solid gray;
        background: white;
        font-size: 2em;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <button onclick="dropdown.open();">open the iron-dropdown</button>
      <iron-dropdown id="dropdown" no-overlap>
        <div slot="dropdown-content">Hello!</div>
      </iron-dropdown>
    </div>
  </body>
</html>
```

### In a Polymer 3 element

```js
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/iron-dropdown/iron-dropdown.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
        }

        iron-dropdown {
          border: 1px solid gray;
          background: white;
          font-size: 2em;
        }
      </style>
      <button on-click="_openDropdown">open the dropdown</button>
      <iron-dropdown id="dropdown" horizontal-align="right" vertical-align="top">
        <div slot="dropdown-content">Hello!</div>
      </iron-dropdown>
    `;
  }

  _openDropdown() {
    this.$.dropdown.open();
  }
}
customElements.define('sample-element', SampleElement);
```

In the above example, the `<div>` assigned to the `dropdown-content` slot will
be hidden until the dropdown element has `opened` set to true, or when the
`open` method is called on the element.

## Contributing

If you want to send a PR to this element, here are the instructions for running
the tests and demo locally:

### Installation

```sh
git clone https://github.com/PolymerElements/iron-dropdown
cd iron-dropdown
npm install
npm install -g polymer-cli
```

### Running the demo locally

```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests

```sh
polymer test --npm
```
