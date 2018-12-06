# MyScript Common Element

[![npm version](https://badge.fury.io/js/myscript-common-element.svg)](https://badge.fury.io/js/myscript-common-element)
[![Examples](https://img.shields.io/badge/Link%20to-examples-blue.svg)](https://myscript.github.io/myscript-common-element/#/elements/myscript-common-element/demos/other-demonstrations)
[![Documentation](https://img.shields.io/badge/Link%20to-documentation-green.svg)](https://developer.myscript.com/docs/interactive-ink/latest/web/web-components/common-element/)

> The common layer of [myscript-math-web](https://github.com/MyScript/myscript-math-web) and [myscript-text-web](https://github.com/MyScript/myscript-text-web). 

<div align="center">
  <img src="preview.gif">
</div>

`myscript-common-element` is a Web component that can be used in every web application to bring handwriting recognition and conversion. 

It integrates all you need:
* Signal capture for all devices,
* Digital ink rendering,
* Link to MyScript Cloud to bring handwriting recognition.

If you are not familiar with [Web components](https://www.webcomponents.org/) and [Polymer](https://www.polymer-project.org/), please consider using [MyScriptJS](https://github.com/MyScript/MyScriptJS) or our out-of-the-box components [myscript-math-web](https://github.com/MyScript/myscript-math-web) and [myscript-text-web](https://github.com/MyScript/myscript-text-web).  

## Table of contents

* [Examples](https://github.com/MyScript/myscript-common-element#examples)
* [Features](https://github.com/MyScript/myscript-common-element#features)
* [Requirements](https://github.com/MyScript/myscript-common-element#requirements)
* [Installation](https://github.com/MyScript/myscript-common-element#installation)
* [Usage](https://github.com/MyScript/myscript-common-element#usage)
* [Documentation](https://github.com/MyScript/myscript-common-element#documentation)
* [Support](https://github.com/MyScript/myscript-common-element#support)
* [Feedback](https://github.com/MyScript/myscript-common-element#sharing-your-feedback)
* [Contributing](https://github.com/MyScript/myscript-common-element#contributing)

## Examples

If you're not familiar with MyScript and Interactive Ink, consider discovering its major features with our [text demo and tutorial](http://webdemo.myscript.com/views/text.html).

[Simple text example](https://myscript.github.io/myscript-common-element/#/elements/myscript-common-element/demos/get-started-[v4]) of `myscript-common-element`. 

[All our examples](https://myscript.github.io/myscript-common-element/#/elements/myscript-common-element/demos/other-demonstrations) with the [source codes](https://github.com/MyScript/myscript-common-element/tree/master/src/demo-app/examples).

## Features

* Easy to integrate,
* Digital ink capture and rendering,
* Rich editing gestures,
* Import and export content,
* Styling,
* Typeset support,
* More than 200 mathematical symbols supported,
* 65 supported languages.

You can discover all the features on our Developer website for [Text](https://developer.myscript.com/text) and [Math](https://developer.myscript.com/math).

## Requirements

1. Have [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/en/docs/install) installed.
2. Have a MyScript developer account. You can create one [here](https://dev.myscript.com/).
3. Get your keys and the free monthly quota to access MyScript Cloud at [developer.myscript.com](https://developer.myscript.com/getting-started/web)
 
## Installation
  
Use an existing project or start a fresh one.

```shell
npm init
```

Install `myscript-common-element` and use it as showed in the [Usage]() section.

```shell
npm install myscript-common-element
```

## Usage

1. Create an `index.html` file in the same directory. 

2. Add the following lines in the `head` section to import the library and the webcomponents polyfill.
```html
<script type="module" src="node_modules/myscript-common-element/myscript-common-element.js"></script>
<script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
```  

3. Still in the `head` section, add the following style:
```html
<style>
    myscript-common-element {
        height: 100vh;
    }
</style>
```

4. Use the component in the `body` section with the keys you received by mail.
```html
  <myscript-common-element
        applicationkey="YOUR MYSCRIPT DEVELOPER APPLICATION KEY"
        hmackey="YOUR MYSCRIPT DEVELOPER HMAC KEY">
  </myscript-common-element>
```

5. Your `index.html` file should look like this:
```html
<html>
    <head>
        <script type="module" src="node_modules/myscript-common-element/myscript-common-element.js"></script>
        <script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
        <style>
            myscript-common-element {
                height: 100vh;
            }
        </style>
    </head>
    <body>
      <myscript-common-element
        applicationkey="YOUR MYSCRIPT DEVELOPER APPLICATION KEY"
        hmackey="YOUR MYSCRIPT DEVELOPER HMAC KEY">
      </myscript-common-element>
    </body>
</html>
```

6. Launch a local Web server to start using it! We recommend to use the polymer one, you can find more information on the [Polymer website](https://www.polymer-project.org/3.0/start/install-3-0).
```
polymer serve
```

You can find this guide and a more complete example on the [MyScript Developer website](https://developer.myscript.com/docs/interactive-ink/latest/web/web-components/common-element/).

## Documentation

You can find a complete documentation with the following sections on our Developer website:

* **Get Started**: [how to use myscript-common-element with a full example](https://developer.myscript.com/docs/interactive-ink/latest/web/web-components/common-element/get-started/),
* **Editing**: [how to interact with content](https://developer.myscript.com/docs/interactive-ink/latest/web/web-components/common-element/editing/),
* **Conversion**: [how to convert your handwritten content](https://developer.myscript.com/docs/interactive-ink/latest/web/web-components/common-element/conversion/),
* **Import and Export**: [how to import and export your content](https://developer.myscript.com/docs/interactive-ink/latest/web/web-components/common-element/import-and-export/),
* **Styling**: [how to style content](https://developer.myscript.com/docs/interactive-ink/latest/web/web-components/common-element/styling/).

We also provide a complete [API Reference](https://myscript.github.io/myscript-common-element/).

## Getting support

You can get support and ask your questions on the [dedicated section](https://developer-support.myscript.com/support/discussions/forums/16000096021) of MyScript Developer website.

## Sharing your feedback

Made a cool app with `myscript-common-element`? We would love to hear about you!
We’re planning to showcase apps using it so let us know by sending a quick mail to [myapp@myscript.com](mailto://myapp@myscript.com)

## Contributing

We welcome your contributions: if you would like to extend `myscript-common-element` for your needs, feel free to fork it!

Please take a look at our [contributing](CONTRIBUTING.md) guidelines before submitting your pull request.

## License
This library is licensed under the [Apache 2.0](http://opensource.org/licenses/Apache-2.0).
