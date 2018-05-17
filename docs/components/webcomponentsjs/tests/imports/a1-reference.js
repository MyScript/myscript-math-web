import './a1-instance.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<a-1></a-1>`;
document.head.appendChild($_documentContainer);
// can reference upgraded instance in previous import when this script runs
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var currentScript = document._currentScript || document.currentScript;
var l = currentScript.ownerDocument.querySelector('link');
var a1 = l.import.querySelector('a-1');
window.a1 = a1;
window.isA1Upgraded = a1.isA1;
