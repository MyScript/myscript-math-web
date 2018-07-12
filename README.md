# MyScript Math Web

[![npm version](https://badge.fury.io/js/myscript-math-web.svg)](https://badge.fury.io/js/myscript-math-web)
[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/MyScriptmyscript-math-web)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/MyScriptmyscript-math-web.svg)](https://vaadin.com/directory/component/MyScriptmyscript-math-web)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/MyScript/myscript-math-web)
[![Examples](https://img.shields.io/badge/Link%20to-examples-blue.svg)](https://myscript.github.io/myscript-math-web/#/elements/myscript-math-web/demos/other-examples)
[![Documentation](https://img.shields.io/badge/Link%20to-documentation-green.svg)](https://developer.myscript.com/docs/interactive-ink/latest/web/web-components/math-element/)

> The easy way to integrate mathematical expressions handwriting recognition in your web app.

<p align="center">
  <img src="preview.gif">
</p>
 
`myscript-math-web` is a Web component that can be used in every web application to bring mathematical handwriting recognition and conversion. 

It integrates all you need:  
* Signal capture for all devices,
* Digital ink rendering,
* Link to MyScript Cloud to bring handwriting recognition.

## Table of contents

* [Examples](https://github.com/MyScript/myscript-math-web#examples)
* [Features](https://github.com/MyScript/myscript-math-web#features)
* [Requirements](https://github.com/MyScript/myscript-math-web#requirements)
* [Installation](https://github.com/MyScript/myscript-math-web#installation)
* [Usage](https://github.com/MyScript/myscript-math-web#usage)
* [Documentation](https://github.com/MyScript/myscript-math-web#documentation)
* [Support](https://github.com/MyScript/myscript-math-web#support)
* [Feedback](https://github.com/MyScript/myscript-math-web#sharing-your-feedback)
* [Contributing](https://github.com/MyScript/myscript-math-web#contributing)


## Examples

If you're not familiar with MyScript and Interactive Ink, consider discovering its major features with our [math demo](http://webdemo.myscript.com/views/math.html).

[Simple example](https://myscript.github.io/myscript-math-web/#/elements/myscript-math-web/demos/get-started-[v4]) of `myscript-math-web`. 

[All our examples](https://myscript.github.io/myscript-math-web/#/elements/myscript-math-web/demos/other-examples) with the [source codes](https://github.com/MyScript/myscript-math-web/tree/master/src/demo-app/examples).


## Features

* Easy to integrate,
* Digital ink capture and rendering,
* Rich editing gestures,
* Content export,
* Styling,
* Typeset support,
* More than 200 mathematical symbols supported.

You can discover all the math features on our [Developer website](https://developer.myscript.com/math).


## Requirements

1. Have [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/en/docs/install) installed.
2. Have a MyScript developer account. You can create one [here](https://dev.myscript.com/).
2. Get your keys and the free monthly quota to access MyScript Cloud at [developer.myscript.com](https://developer.myscript.com)
 
## Installation

Use an existing project or start a fresh one.

```shell
npm init
```

Install `myscript-math-web` and use it as showed in the [Usage]() section.

```shell
npm install myscript-math-web
```


## Usage

1. Create an `index.html` file in the same directory. 

2. Add the following lines in the `head` section to import the library and the webcomponents polyfill.

```html
<script type="module" src="node_modules/myscript-math-web/myscript-math-web.js"></script>
<script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
```  

3. Still in the `head` section, add the following style:

```html
<style>
    myscript-math-web {
        height: 100vh;
    }
</style>
```

4. Use the component in the `body` section with the keys you received by mail.

```html
<myscript-math-web
  applicationkey="YOUR MYSCRIPT DEVELOPER APPLICATION KEY"
  hmackey="YOUR MYSCRIPT DEVELOPER HMAC KEY">
</myscript-math-web>
```

5. Your `index.html` file should look like this:

```html
<html>
    <head>
        <script type="module" src="node_modules/myscript-math-web/myscript-math-web.js"></script>
        <script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
        <style>
            myscript-math-web {
                height: 100vh;
            }
        </style>
    </head>
    <body>
      <myscript-math-web
        applicationkey="YOUR MYSCRIPT DEVELOPER APPLICATION KEY"
        hmackey="YOUR MYSCRIPT DEVELOPER HMAC KEY">
      </myscript-math-web>
    </body>
</html>
```

6. Launch a local Web server to start using it! We recommend to use the polymer one, you can find more information on the [Polymer website](https://www.polymer-project.org/3.0/start/install-3-0).

```
polymer serve
```

You can find this guide and a more complete example on the [MyScript Developer website](https://developer.myscript.com/docs/interactive-ink/latest/web/web-components/math-element/get-started/).


## Documentation

You can find a complete documentation with the following sections on our Developer website:

* **Get Started**: [how to use myscript-math-web with a full example](https://developer.myscript.com/docs/interactive-ink/latest/web/web-components/math-element/get-started/),
* **Editing**: [how to interact with content](https://developer.myscript.com/docs/interactive-ink/latest/web/web-components/math-element/editing/),
* **Conversion**: [how to convert your handwritten content](https://developer.myscript.com/docs/interactive-ink/latest/web/web-components/math-element/conversion/),
* **Export content**: [how to export your content](https://developer.myscript.com/docs/interactive-ink/latest/web/web-components/math-element/import-and-export/),
* **Styling**: [how to style content](https://developer.myscript.com/docs/interactive-ink/latest/web/web-components/math-element/styling/).

We also provide a complete [API Reference](https://myscript.github.io/myscript-math-web/#/elements/myscript-math-web).

## Getting support

You can get support and ask your questions on the [dedicated section](https://developer-support.myscript.com/support/discussions/forums/16000096021) of MyScript Developer website.

## Sharing your feedback

Made a cool app with `myscript-math-web`? We would love to hear about you!
We’re planning to showcase apps using it so let us know by sending a quick mail to [myapp@myscript.com](mailto://myapp@myscript.com)

## Contributing

We welcome your contributions: if you wish to contribute to `myscript-math-web`, feel free to fork it!

Please take a look at our [contributing](CONTRIBUTING.md) guidelines before submitting your pull request.

## License

This library is licensed under the [Apache 2.0](http://opensource.org/licenses/Apache-2.0).
