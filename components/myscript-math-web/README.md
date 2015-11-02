myscript-math-web
=================

The easy way to integrate mathematical expressions handwriting recognition in your web app.

<a href="myscript.github.io/"><img src="math.gif" /></a>

```html
<html>
<head>
     <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="bower_components/myscript-math-web.html">
</head>
<body>
    <myscript-math-web applicationkey="#PUT YOUR MYSCRIPT CDK APPLICATION KEY HERE#" 
        hmackey="#PUT YOUR MYSCRIPT CDK HMAC KEY HERE#">
    </myscript-math-web>
</template>
</body>
</html>
```    

[Test it live](http://myscript.github.io/myscript-math-web/components/myscript-math-web/demo/)!

## What is it about?

myscript-math-web is a web component that can be used in every web application (whatever the JavaScript library you are using) to bring handwriting recognition. It integrates all you need:  
* Signal capture,
* Nice digital ink rendering,  
* Plug with MyScript CDK to bring handwriting recognition,  
* Mathematical formulas display section build with [KaTeX](http://khan.github.io/KaTeX/).

## Installation

**Bower**: `bower install myscript`

## Start using myscript-math-web

1. Create an account on the [Developer portal](https://dev.myscript.com/), which will allow you to generate an application key and HMAC key.  

2. Import Web Components' polyfill

    `html <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>`

3. Import Custom Element

    `html <link rel="import" href="bower_components/myscript-math-web.html">`

3. Use it

    `html <myscript-math-web applicationkey="#PUT YOUR MYSCRIPT CDK APPLICATION KEY HERE#" hmackey="#PUT YOUR MYSCRIPT CDK HMAC KEY HERE#"></myscript-math-web>`

## Documentation 

The API Reference is available here: [http://myscript.github.io/myscript-math-web/](http://myscript.github.io/myscript-math-web/) 

## Contribute

If you wish to contribute to myscript-math-web, feel free to fork it, fire `bower install` and use [polyserve](https://github.com/PolymerLabs/polyserve) as an HTTP server. The demo page (in `demo` directory) can help you make your first experimentation.

Please sign our [Contributor License Agreement](CONTRIBUTING.md) before submitting your pull request.

## Share your feedback

Made a cool app with myscript-math-web? We would love to hear about it!

We plan to showcase apps, so let us know by writing to [myapp@myscript.com](mailto://myapp@myscript.com)

## License

[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)
