[![Published on NPM](https://img.shields.io/npm/v/@polymer/paper-toggle-button.svg)](https://www.npmjs.com/package/@polymer/paper-toggle-button)
[![Build status](https://travis-ci.org/PolymerElements/paper-toggle-button.svg?branch=master)](https://travis-ci.org/PolymerElements/paper-toggle-button)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/paper-toggle-button)

## &lt;paper-toggle-button&gt;

`<paper-toggle-button>` provides a ON/OFF switch that user can toggle the state
by tapping or by dragging the switch.

See: [Documentation](https://www.webcomponents.org/element/@polymer/paper-toggle-button),
  [Demo](https://www.webcomponents.org/element/@polymer/paper-toggle-button/demo/demo/index.html).

## Usage

### Installation

```
npm install --save @polymer/paper-toggle-button
```

### In an HTML file

```html
<html>
  <head>
    <script type="module">
      import '@polymer/paper-toggle-button/paper-toggle-button.js';
    </script>
  </head>
  <body>
    <paper-toggle-button checked></paper-toggle-button>
    <paper-toggle-button disabled></paper-toggle-button>
  </body>
</html>
```

### In a Polymer 3 element

```js
import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import '@polymer/paper-toggle-button/paper-toggle-button.js';

class ExampleElement extends PolymerElement {
  static get template() {
    return html`
      <paper-toggle-button checked></paper-toggle-button>
      <paper-toggle-button disabled></paper-toggle-button>
    `;
  }
}

customElements.define('example-element', ExampleElement);
```

## Contributing

If you want to send a PR to this element, here are the instructions for running
the tests and demo locally:

### Installation

```sh
git clone https://github.com/PolymerElements/paper-toggle-button
cd paper-toggle-button
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
