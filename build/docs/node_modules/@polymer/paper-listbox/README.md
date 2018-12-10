[![Published on NPM](https://img.shields.io/npm/v/@polymer/paper-listbox.svg)](https://www.npmjs.com/package/@polymer/paper-listbox)
[![Build status](https://travis-ci.org/PolymerElements/paper-listbox.svg?branch=master)](https://travis-ci.org/PolymerElements/paper-listbox)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/paper-listbox)

## &lt;paper-listbox&gt;
`<paper-listbox>` implements an accessible listbox control with Material Design styling. The focused item
is highlighted, and the selected item has bolded text.

```html
<paper-listbox>
  <paper-item>Item 1</paper-item>
  <paper-item>Item 2</paper-item>
</paper-listbox>
```

An initial selection can be specified with the `selected` attribute.

```html
<paper-listbox selected="0">
  <paper-item>Item 1</paper-item>
  <paper-item>Item 2</paper-item>
</paper-listbox>
```

Make a multi-select listbox with the `multi` attribute. Items in a multi-select listbox can be deselected,
and multiple item can be selected.

```html
<paper-listbox multi>
  <paper-item>Item 1</paper-item>
  <paper-item>Item 2</paper-item>
</paper-listbox>
```

### Styling

The following custom properties and mixins are available for styling:

| Custom property | Description | Default |
| --- | --- | --- |
| `--paper-listbox-background-color` | Menu background color | `--primary-background-color` |
| `--paper-listbox-color` | Menu foreground color | `--primary-text-color` |
| `--paper-listbox` | Mixin applied to the listbox | `{}` |

### Accessibility

`<paper-listbox>` has `role="listbox"` by default. A multi-select listbox will also have
`aria-multiselectable` set. It implements key bindings to navigate through the listbox with the up and
down arrow keys, esc to exit the listbox, and enter to activate a listbox item. Typing the first letter
of a listbox item will also focus it.

See: [Documentation](https://www.webcomponents.org/element/@polymer/paper-listbox),
  [Demo](https://www.webcomponents.org/element/@polymer/paper-listbox/demo/demo/index.html).

## Usage

### Installation
```
npm install --save @polymer/paper-listbox
```

### In an html file
```html
<html>
  <head>
    <script type="module">
      import '@polymer/paper-listbox/paper-listbox.js';
    </script>
  </head>
  <body>
    <paper-listbox>
      <div role="option">item 1</div>
      <div role="option">item 2</div>
      <div role="option">item 3</div>
    </paper-listbox>
  </body>
</html>
```
### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-listbox/paper-listbox.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <paper-listbox>
        <div role="option">item 1</div>
        <div role="option">item 2</div>
        <div role="option">item 3</div>
      </paper-listbox>
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
git clone https://github.com/PolymerElements/paper-listbox
cd paper-listbox
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
