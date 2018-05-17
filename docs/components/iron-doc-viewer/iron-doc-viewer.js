import '../iron-location/iron-location.js';
import '../marked-element/marked-element.js';
import '../polymer/polymer.js';
import '../prism-element/prism-highlighter.js';
import '../prism-element/prism-theme-default.js';
import './iron-doc-behavior.js';
import './iron-doc-class.js';
import './iron-doc-demo.js';
import './iron-doc-element.js';
import './iron-doc-mixin.js';
import './iron-doc-namespace.js';
import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';
import { flush } from '@polymer/polymer/lib/legacy/polymer.dom.js';
Polymer({
  _template: `
    <style include="iron-doc-viewer-styles prism-theme-default">
      iron-doc-demo {
        height: 100%;
      }
    </style>

    <iron-location path="{{_urlPath}}" hash="{{_urlHash}}"></iron-location>

    <template is="dom-if" if="[[_equal(_descriptorType,'demos')]]" restamp="">
      <iron-doc-demo class="active" demo="[[_demo]]" src-prefix="[[demoSrcPrefix]]" title="{{title}}">
      </iron-doc-demo>
    </template>

    <template is="dom-if" if="[[_equal(_descriptorType,'namespaces')]]" restamp="">
      <iron-doc-namespace class="active" descriptor="[[_currentDescriptor]]" fragment-prefix="[[_fragmentPrefix]]" title="{{title}}" base-href="[[baseHref]]">
      </iron-doc-namespace>
    </template>

    <template is="dom-if" if="[[_equal(_descriptorType,'elements')]]" restamp="">
      <iron-doc-element class="active" descriptor="[[_currentDescriptor]]" fragment-prefix="[[_fragmentPrefix]]" title="{{title}}" base-href="[[baseHref]]">
      </iron-doc-element>
    </template>

    <template is="dom-if" if="[[_equal(_descriptorType,'mixins')]]" restamp="">
      <iron-doc-mixin class="active" descriptor="[[_currentDescriptor]]" fragment-prefix="[[_fragmentPrefix]]" title="{{title}}" base-href="[[baseHref]]">
      </iron-doc-mixin>
    </template>

    <template is="dom-if" if="[[_equal(_descriptorType,'behaviors')]]" restamp="">
      <iron-doc-behavior class="active" descriptor="[[_currentDescriptor]]" fragment-prefix="[[_fragmentPrefix]]" title="{{title}}" base-href="[[baseHref]]">
      </iron-doc-behavior>
    </template>

    <template is="dom-if" if="[[_equal(_descriptorType,'classes')]]" restamp="">
      <iron-doc-class class="active" descriptor="[[_currentDescriptor]]" fragment-prefix="[[_fragmentPrefix]]" title="{{title}}" base-href="[[baseHref]]">
      </iron-doc-class>
    </template>
`,

  is: 'iron-doc-viewer',

  properties: {
    /**
     * The [Polymer Analyzer](https://github.com/Polymer/polymer-analyzer)-generated
     * element descriptor to display details for.
     */
    descriptor: {
      type: Object,
    },

    /**
     * By default all routing is performed using the URL fragment
     * (e.g. `docs.html#/elements/my-element`).
     *
     * If your server supports it and you would like to use the real URL
     * path instead (e.g. `/api/docs/elements/my-element`), set this to
     * the base path where the page is mounted, omitting the trailing
     * slash (e.g. `/api/docs` or *empty string* for the root path).
     */
    baseHref: {
      type: String,
      value: '#'
    },

    /**
     * URL prefix for demo iframes.
     */
    demoSrcPrefix: String,

    /**
     * Path to the item in the descriptor to display.
     *
     * Examples:
     *   - `/` for the root namespace
     *   - `/elements/paper-button`
     *   - `/mixins/paper-button-behavior`
     *
     * Defaults to the current `window.location` path.
     *
     * If `baseHref` is set, it will be trimmed from the prefix of this
     * `path`.
     */
    path: {
      type: String,
      notify: true,
      value: null
    },

    /**
     * Instead of displaying items relative to the top level of
     * `descriptor`, start from this namespace.
     */
    rootNamespace: {
      type: String,
    },

    /**
     * Display title for the currently selected item.
     * @type {string}
     */
    title: {
      type: String,
      notify: true
    },

    /**
     * True if the viewer is currently displaying a demo.
     */
    demo: {
      type: Boolean,
      computed: '_computeDemo(_demo)',
      reflectToAttribute: true,
      notify: true
    },

    _descriptorType: String,

    _urlPath: String,

    _urlHash: String,

    _currentDescriptor: Object,

    _fragmentPrefix: String,

    _scrollTo: String,

    _demo: Object
  },

  observers: [
    '_routingChanged(baseHref, _urlPath, _urlHash)',
    '_dataChanged(descriptor, path, _scrollTo)',
  ],

  _equal: function(a, b) {
    return a == b;
  },

  _computeDemo: function(demo) {
    return !!demo;
  },

  _routingChanged: function(baseHref, urlPath, urlHash) {
    if (baseHref.indexOf('#') === 0) {
      // URL fragment routing.
      var parts = (urlHash || '').split('#');
      this.path = parts[0];
      this._scrollTo = parts[1] || null;
      this._fragmentPrefix = parts[0] + '#';

    } else {
      // URL path routing.
      if (baseHref && urlPath && urlPath.indexOf(baseHref) === 0) {
        this.path = urlPath.substring(baseHref.length);
      } else {
        this.path = urlPath;
      }
      this._scrollTo = urlHash;
    }
  },

  _dataChanged: function(descriptor, path, scrollAnchor) {
    if (!this.descriptor) {
      this._descriptorType = null;
      return;
    }

    if (!path || path === '/') {
      if (this.rootNamespace) {
        this.path = '/namespaces/' + this.rootNamespace;
      } else {
        this._descriptorType = 'namespaces';
        this._currentDescriptor = descriptor;
      }
      return;
    }

    var descriptorType, name, demoName;
    if (this.baseHref && path.indexOf(this.baseHref) >= 0) {
      path = path.substring(this.baseHref.length);
    }
    var parts = path.split('/');
    if (parts.length > 1) {
      descriptorType = parts[1];
      name = parts[2];
    }
    if (parts.length > 3 && parts[3] === 'demos') {
      demoName = parts.slice(4).join('/');
    }

    var namespace = getNamespace(this.descriptor, name) || this.descriptor;
    if (namespace == null) {
      // 404?
      return;
    }
    this._descriptorType = descriptorType;
    if (descriptorType === 'namespaces') {
      this._currentDescriptor = namespace.namespaces &&
          namespace.namespaces.filter(function (n) {
            return n.name === name;
          })[0];
    } else if (descriptorType === 'elements') {
      this._currentDescriptor = namespace.elements &&
          namespace.elements.filter(function (e) {
            return e.name === name ||  e.tagname === name;
          })[0];
    } else if (descriptorType === 'classes') {
      this._currentDescriptor = namespace.classes &&
          namespace.classes.filter(function (e) {
            return (e.name || e.tagname) === name;
          })[0];
    } else if (descriptorType === 'mixins') {
      this._currentDescriptor = namespace.mixins &&
          namespace.mixins.filter(function (m) {
            return m.name === name;
          })[0];
    } else if (descriptorType === 'behaviors') {
      var behaviors =
          ((namespace.metadata || {}).polymer || {}).behaviors;
      this._currentDescriptor = behaviors &&
          behaviors.filter(function (b) {
            return b.name === name;
          })[0];
    } else if (descriptorType === 'functions') {
      this._currentDescriptor = namespace.functions &&
          namespace.functions.filter(function (f) {
            return f.name === name;
          })[0];
    }

    this._demo = null;
    if (demoName && this._currentDescriptor &&
      this._currentDescriptor.demos) {
      for (var i = 0; i < this._currentDescriptor.demos.length; i++) {
        var demo = this._currentDescriptor.demos[i];
        var shortName = demo.description &&
            demo.description.toLowerCase().replace(/\s+/g, '-');
        if (demo.url === demoName || (shortName && shortName === demoName)) {
          this._demo = demo;
          this._descriptorType = 'demos';
          break;
        }
      }
    }

    this.fire('view-changed');

    if (scrollAnchor) {
      flush();
      var active = this.$$('.active');
      if (active && active.scrollToAnchor) {
        active.scrollToAnchor(scrollAnchor);
      }
    }
  }

  /**
   * Fired when the active view changes.
   * @event view-changed
   */
});

/**
 * Walks through the tree of namespaces to find the namespace containing
 * `name`.
 */
function getNamespace(descriptor, name) {
  var parts = name.split('.');
  if (parts.length < 2) {
    return undefined;
  }
  parts = parts.slice(0, parts.length - 1);
  var namespace = descriptor;

  for (var i = 0; i < parts.length; i++) {
    if (!namespace.namespaces) {
      return undefined;
    }
    var matches = namespace.namespaces.filter(function(n) {
      return n.name === parts[i];
    });
    if (matches.length === 0) {
      return undefined;
    }
    namespace = matches[0];
  };
  return namespace;
}
