# [v2.0.0](https://github.com/MyScript/myscript-common-element/tree/v2.0.0)

## Features
- New events to be notified of editor changes.
- New `strokecolor` and `strokewidth` attributes. Used to change current writing style. 
- New `unloaded` flag to control component state. `load` event will be trigger once the editor will be fully loaded.
- New **not mutable** `configuration` attribute. Changing the configuration will clear the underlying editor, all currents strokes and results will be lost. To do it, set `unloaded=true` after changing configuration, and wait for a `load` event.
- New **read-only** `editor` property that allow you to access to the underlying editor object (see [MyScriptJS documentation]() for more details).
- New CSS variables to customize the web-component. See [demo/customstyle.html](demo/customstyle.html) as an example.
 
## Breaking changes
- Complete rewrite of the underlying javascript library with ES6 syntax
- Internal design improved to allow extensibility and support of upcoming recognition types. Documentation and illustrating samples to come in next release. 
- Removal of all deprecated attributes and methods
- All events has been renamed. See the [documentation](./docs/index.html) to discover new behavior.
- `resulttypes`, `language`, `typeset`, `textparameters`, `mathparameters`, `shapeparameters`, `musicparameters`, `analyzerparameters` are replaced by the unique `configuration` attribute (see [MyScriptJS documentation]() for a complete spec).
- Renamed `timeout` attribute to `recognitiontriggerdelay`
- Renamed `delete()` property to `clear()`
- Changed `ssl` attribute to a `scheme` attribute (i.e. `ssl=true` will be replaced by `scheme=https`)
- `getAvailableLanguages()` have been replaced by a new web-component. You can use it to retrieve the list of available languages for your configuration.

## Bugs
- User can no longer write when an unrecoverable error is detected forcing him to reload the page. See [demo/init-error.html](.demo/init-error.html) to see how it works.

For more details about attributes, look at the [documentation](./docs/index.html).

## Limits
- `myscript-common-element` does not support pure shadow DOM. Still some issues to use underlying css.

# [v1.2.3](https://github.com/MyScript/myscript-common-element/tree/v1.2.3)

## Features
- Change colors to fit the new MyScript Developer theme

# [v1.2.2](https://github.com/MyScript/myscript-common-element/tree/v1.2.2)

## Features
- New `strokecolor` attribute to setup/change stroke color settings
- New `strokewidth` attribute to setup/change stroke width settings

## Bugs
- See [MyScriptJS v1.2.2](https://github.com/MyScript/MyScriptJS/tree/v1.2.2) for fixes

# [v1.2.1](https://github.com/MyScript/myscript-common-element/tree/v1.2.1)

## Bugs
- See [MyScriptJS v1.2.1](https://github.com/MyScript/MyScriptJS/tree/v1.2.1) for fixes

# [v1.2.0](https://github.com/MyScript/myscript-common-element/tree/v1.2.0)

## Features
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
- Add `getStats()` method to get various stats relative to ink in order to help evaluate the myscript cdk usage

## Bugs
- Unused `configuration` attribute removed
- Fixes issue when setting `host` from javascript (@see mutable `host` feature)
- Fixes issue when setting `host` in WebSocket recognition (@see mutable `host` feature)
- Fixes issue when setting `protocol` from javascript (@see mutable `protocol` feature)
- Fixes issue on resize due to CSS 
- Explicit default values on documentation 
