# Change Log
## [v2.0-beta1](https://github.com/MyScript/myscript-common-element/tree/v2.0-beta1)
### Features
- Complete rewrite with ES6 syntax of MySriptJS used under the hood of this custom element
- Internal design improved to allow extensibility and support of upcoming recognition types. Documentation and illustrating samples to come in next release. 
- Removal of all deprecated attributes and methods
- User can no longer write when an unrecoverable error is detected forcing him to relaod the page. See demo/init-error.html to discover this new feature.
- --myscript-common-element-button-background, --myscript-common-element-button-focus-background, --myscript-common-element-button-disabled-background css variables helps you styling the buttons. See demo/customstyle.html for a working example.
- configuration attributes allow you to set programmaticly all configuration of MyScriptJS (see [MyScriptJS documentation]() for a complete spec ). Options are overide by other attributes when they are set.
- editor read only attributes allow you to access to the underlying editor object create when myscipt-common-element custom element is attached to the DOM  (see [MyScriptJS documentation]() for more details )
- unloaded attribute ease the integration with other front-end frameworks or when you want to programmaticly set configuration and other attributs. Add the unloaded attribut into your markup and remove it in your JS logic when all attributes are set 
### Breaking changes :
- tiemout property has be renammed to recognitiontriggerdelay
- existing events have been removed. See custom elment docs to discover new behavior.
- resulttypes, language, typeset, textparameters, mathparameters, shapeparameters, musicparameters, analyzerparameters  is not longuer expose. Use configuration to 
- ssl attributes have been removed. Use sheme attribute instead.
- _disableUndoRedo, _disableClear, _disableRecognize have been renamed to disableundoredo, disableclear, disablerecognize
- delete() have been renamed to clear() to be consistent accross APIs
- getAvailableLanguages() have been removed. You can use the non graphical element to access the language list accessible for your account.
- Once myscript-common-element is attached to the DOM or when unloaded attribut is remove, you can only change strokecolor and strokewidth attributes. If you change any athor attribute you will have to set the unloaded attribut then removed it. This will clear the underlying editor and all currents strokes and recognition results will be lost.

### Limits
- myscript-common-element does not support pure shadow DOM. Still some issues to import myscriptjs css.
    

## [v1.2.3](https://github.com/MyScript/myscript-common-element/tree/v1.2.3)

### Features
- Change colors to fit the new MyScript Developer theme

## [v1.2.2](https://github.com/MyScript/myscript-common-element/tree/v1.2.2)

### Features
- New `strokecolor` attribute to setup/change stroke color settings
- New `strokewidth` attribute to setup/change stroke width settings

### Bugs
- See [MyScriptJS v1.2.2](https://github.com/MyScript/MyScriptJS/tree/v1.2.2) for fixes

## [v1.2.1](https://github.com/MyScript/myscript-common-element/tree/v1.2.1)

### Bugs
- See [MyScriptJS v1.2.1](https://github.com/MyScript/MyScriptJS/tree/v1.2.1) for fixes


## [v1.2.0](https://github.com/MyScript/myscript-common-element/tree/v1.2.0)

### Features
- Mutable `host` attribute
- Mutable `protocol` attribute
- New `mathparameters` attribute to setup/change math recognition settings
- New `textparameters` attribute to setup/change text recognition settings
- New `shapeparameters` attribute to setup/change shape recognition settings
- New `musicparameters` attribute to setup/change music recognition settings
- New `analyzerparameters` attribute to setup/change analyzer recognition settings
- New `typeset` attribute to allow shape and analyzer rendering on the element
- Deprecated `language` attribute, replaced by `textparameters.language`
- Deprecated `resulttypes` attribute, replaced by `mathparameters.resultTypes`
- New undo/redo/clear/recognize buttons to control the element state
- New error panel to display potential errors
- Upgrade from Polymer 1.2 to 1.4
- Add docs/demo buttons on component page
- Add getStats method to get various stats relative to ink in order to help evaluate the myscript cdk usage


### Bugs
- Unused `configuration` attribute removed
- Fixes issue when setting `host` from javascript (@see mutable `host` feature)
- Fixes issue when setting `host` in WebSocket recognition (@see mutable `host` feature)
- Fixes issue when setting `protocol` from javascript (@see mutable `protocol` feature)
- Fixes issue on resize due to CSS 
- Explicit default values on documentation 
