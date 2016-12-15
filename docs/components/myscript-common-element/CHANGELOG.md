# Change Log
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
- Unused `options` attribute removed
- Fixes issue when setting `host` from javascript (@see mutable `host` feature)
- Fixes issue when setting `host` in WebSocket recognition (@see mutable `host` feature)
- Fixes issue when setting `protocol` from javascript (@see mutable `protocol` feature)
- Fixes issue on resize due to CSS 
- Explicit default values on documentation 
