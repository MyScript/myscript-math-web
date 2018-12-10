[![Published on NPM](https://img.shields.io/npm/v/@polymer/paper-swatch-picker.svg)](https://www.npmjs.com/package/@polymer/paper-swatch-picker)
[![Build status](https://travis-ci.org/PolymerElements/paper-swatch-picker.svg?branch=master)](https://travis-ci.org/PolymerElements/paper-swatch-picker)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/paper-swatch-picker)

## &lt;paper-swatch-picker&gt;
`<paper-swatch-picker>` is a simple color picker element that will allow you to choose one
of the Material Design colors from a list of available swatches.

See: [Documentation](https://www.webcomponents.org/element/@polymer/paper-swatch-picker),
  [Demo](https://www.webcomponents.org/element/@polymer/paper-swatch-picker/demo/demo/index.html).

## Usage

### Installation
```
npm install --save @polymer/paper-swatch-picker
```

### In an html file
```html
<html>
  <head>
    <script type="module">
      import '@polymer/paper-swatch-picker/paper-swatch-picker.js';
    </script>
  </head>
  <body>
    <paper-swatch-picker></paper-swatch-picker>
    <paper-swatch-picker column-count=5 color-list='["#65a5f2", "#83be54", "#f0d551", "#e5943c", "#a96ddb"]'></paper-swatch-picker>
  </body>
</html>
```
### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-swatch-picker/paper-swatch-picker.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <paper-swatch-picker></paper-swatch-picker>
      <paper-swatch-picker color="{{selectedColor}}"></paper-swatch-picker>
      <paper-swatch-picker column-count=5 color-list='["#65a5f2", "#83be54", "#f0d551", "#e5943c", "#a96ddb"]'></paper-swatch-picker>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Contributing
If you want to send a PR to this element, here are
the instructions for running the tests and demo locally:

### Installation
```sh
git clone https://github.com/PolymerElements/paper-swatch-picker
cd paper-swatch-picker
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


[![Published on NPM](https://img.shields.io/npm/v/@polymer/paper-swatch-picker.svg)](https://www.npmjs.com/package/@polymer/paper-swatch-picker)
[![Build status](https://travis-ci.org/PolymerElements/paper-swatch-picker.svg?branch=master)](https://travis-ci.org/PolymerElements/paper-swatch-picker)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/paper-swatch-picker)

## &lt;paper-swatch-picker&gt;
`<paper-swatch-picker>` is a single-line text field with Material Design styling.

See: [Documentation](https://www.webcomponents.org/element/@polymer/paper-swatch-picker),
  [Demo](https://www.webcomponents.org/element/@polymer/paper-swatch-picker/demo/demo/index.html).

## Usage

### Installation
```
npm install --save @polymer/paper-swatch-picker
```

### In an html file
```html
<html>
  <head>
    <script type="module">
      import '@polymer/paper-swatch-picker/paper-swatch-picker.js';
    </script>
  </head>
  <body>
    <paper-swatch-picker always-float-label label="Floating label"></paper-swatch-picker>
  </body>
</html>
```
### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-swatch-picker/paper-swatch-picker.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <paper-swatch-picker always-float-label label="Floating label"></paper-swatch-picker>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Contributing
If you want to send a PR to this element, here are
the instructions for running the tests and demo locally:

### Installation
```sh
git clone https://github.com/PolymerElements/paper-swatch-picker
cd paper-swatch-picker
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
