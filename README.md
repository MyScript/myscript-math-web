:pencil: The easy way to integrate mathematical expressions handwriting recognition in your web app.

<p align="center">
  <img src="preview.gif">
</p>
 
<a style="text-align:center; font-size:150%;" href="https://myscript.github.io/myscript-math-web/components/myscript-math-web/examples/">Test it live</a>


## What is it about?

myscript-math-web is a web component that can be used in every web application to bring handwriting recognition and conversion. It integrates all you need:  
* Signal capture,
* Digital ink rendering,
* Rich editing gestures,
* Conversion,
* Exports (LaTex and MathML).

## Getting started

### Prerequisites

1. Have [bower](https://bower.io/#install-bower) installed.
2. Get your keys and the free monthly quota to access MyScript Cloud at [developer.myscript.com](https://developer.myscript.com)
 
## Installation

1. Download myscript-math-web.  
```shell
bower install myscript-math-web
```
2. Create and edit `index.html` file in the same directory. Add the following line in the head section to import the library.  
```html
<!-- Load the webcomponent polyfill -->
<script src="bower_components/webcomponentsjs/webcomponents-loader.js"></script>
<!-- Load myscript-math-web and the related librairies -->
<link rel="import" href="bower_components/myscript-math-web/myscript-math-web.html">
```  
3. Use the component in the `body` section. Use the keys you received by mail.  
```html
<myscript-math-web
  applicationkey="YOUR MYSCRIPT CDK APPLICATION KEY"
  hmackey="YOUR MYSCRIPT CDK HMAC KEY">
</myscript-math-web>
```
4. Launch a local web-server and use it!


## Examples

Browse [the examples hosted on github.io](https://myscript.github.io/myscript-math-web/components/myscript-math-web/).

The [directory examples/](/examples) of this Git repository contains all the example source codes. 

## Documentation

A complete guide is available on [MyScript Developer website](https://developer.myscript.com/docs/interactive-ink/1.0/web/web-components/math-element/).

The API Reference is available in the `docs` directory or on [myscript.github.io/myscript-math-web/ website](https://myscript.github.io/myscript-math-web/).

## Contribute

We welcome your contributions:
If you wish to contribute to myscript-math-web, feel free to fork it!
Please sign our [Contributor License Agreement](CONTRIBUTING.md) before submitting your pull request.

## Share your feedback

Made a cool app with myscript-math-web? We would love to hear about you!
We’re planning to showcase apps using it so let us know by sending a quick mail to [myapp@myscript.com](mailto://myapp@myscript.com)

## License

[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)
