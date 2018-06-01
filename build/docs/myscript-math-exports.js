/* eslint-disable no-underscore-dangle,no-undef,class-methods-use-this */
import { html, PolymerElement } from "./node_modules/@polymer/polymer/polymer-element.js";
import "./katex-component.js";
/**
`myscript-math-exports` is a component to display `myscript-math-web` exports.

    <myscript-math-exports
        exports="myscript-math-web.exports">
    </myscript-math-exports>

Custom property | Description | Default
----------------|-------------|----------
`--myscript-math-exports-color` | Math exports color | #000000
*/

class MyScriptMathExports extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
                --myscript-math-exports-color: #000000;

                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                color: var(--myscript-math-exports-color);
                min-height: 60px;
                overflow: auto;
            }

            .export {
                flex-grow: 1;
            }
        </style>
        <template is="dom-if" if="[[ _displaymath(resulttypes, mimetypes) ]]">
            <katex-component value="[[ _getLatexCleaned(exports) ]]" class="export math">
                [[ _getLatexCleaned(exports) ]]
            </katex-component>
        </template>
        <template is="dom-if" if="[[ _displaylatex(resulttypes, mimetypes) ]]">
            <div class="export latex">[[ _getLatex(exports) ]]</div>
        </template>
        <template is="dom-if" if="[[ _displaymathml(resulttypes, mimetypes) ]]">
            <div class="export mathml">[[ _getMathml(exports) ]]</div>
        </template>
        <template is="dom-if" if="[[ _displayofficeopenxml(resulttypes, mimetypes) ]]">
            <div class="export mathofficexml">[[ _getOfficeopenxml(exports) ]]</div>
        </template>
        <template is="dom-if" if="[[ _displaysymboltree(resulttypes, mimetypes) ]]">
            <div class="export symboltree">[[ _getSymboltree(exports) ]]</div>
        </template>
`;
  }

  static get is() {
    return 'myscript-math-exports';
  }

  static get properties() {
    return {
      /**
           * Math export types (LATEX, MATHML or SYMBOLTREE).
           * <b>Warning</b>: v3 only, for v4, use mimetypes instead
           * @type {Array<String>}
           */
      resulttypes: {
        type: Array,
        value: []
      },

      /**
           * Math export types (application/x-latex, application/mathml+xml).
           * @type {Array<String>}
           */
      mimetypes: {
        type: Array,
        value: []
      },

      /**
           * Exports result.
           * @attribute exports
           * @type {Object<String, Object>}.
           */
      exports: {
        type: Object,
        notify: true
      }
    };
  }

  _getLatex(exports) {
    return exports ? exports['application/x-latex'] || exports.LATEX || exports.latex || '' : '';
  }

  _getLatexCleaned(exports) {
    if (this._getLatex(exports).includes('\\\\')) {
      const steps = '\\begin{align*}' + this._getLatex(exports) + '\\end{align*}';
      return steps.replace('\\overrightarrow', '\\vec').replace('\\begin{aligned}', '').replace('\\end{aligned}', '').replace('\\llbracket', '\\lbracket').replace('\\rrbracket', '\\rbracket').replace('\\widehat', '\\hat').replace(new RegExp('(align.{1})', 'g'), 'aligned');
    }

    return this._getLatex(exports).replace('\\overrightarrow', '\\vec').replace('\\llbracket', '\\lbracket').replace('\\rrbracket', '\\rbracket').replace('\\widehat', '\\hat').replace(new RegExp('(align.{1})', 'g'), 'aligned');
  }

  _getMathml(exports) {
    return exports ? exports['application/mathml+xml'] || exports.MATHML || exports.mathml || '' : '';
  }

  _getOfficeopenxml(exports) {
    return exports ? exports['application/mathofficeXML'] || exports.OFFICEOPENXMLMATH || exports.mathofficeXML || '' : '';
  }

  _getSymboltree(exports) {
    return exports ? JSON.stringify(exports['application/vnd.myscript.jiix'] || exports.SYMBOLTREE || '') : '';
  }

  _displaymath(resulttypes, mimetypes) {
    return !(resulttypes.length > 0 || mimetypes.length > 0);
  }

  _displaylatex(resulttypes, mimetypes) {
    return resulttypes.indexOf('LATEX') > -1 || mimetypes.indexOf('application/x-latex') > -1;
  }

  _displaymathml(resulttypes, mimetypes) {
    return resulttypes.indexOf('MATHML') > -1 || mimetypes.indexOf('application/mathml+xml') > -1;
  }

  _displayofficeopenxml(resulttypes, mimetypes) {
    return resulttypes.indexOf('OFFICEOPENXMLMATH') > -1 || mimetypes.indexOf('application/mathofficeXML') > -1;
  }

  _displaysymboltree(resulttypes, mimetypes) {
    return resulttypes.indexOf('SYMBOLTREE') > -1 || mimetypes.indexOf('application/vnd.myscript.jiix') > -1;
  }

}

customElements.define(MyScriptMathExports.is, MyScriptMathExports);