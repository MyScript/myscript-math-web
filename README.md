myscript-math-web
=================

The easy way to integrate mathematical expression handwriting recognition in your webapp.

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

Test [it live](http://myscript.github.io/myscript-math-web/index.html/demo) !

## What is it about ?
myscript-math-web is a web component that could be used in every web application (whatever the javascript library you are using) to bring handwriting recognition. It integrates all what you need :
- Signal capture
- Nice rendering
- Plug with MyScript CDK to bring Handwriting recognition
- Rendering section with [Katex](http://khan.github.io/KaTeX/)

## Installation

**Bower**: `bower install myscript`


## Start using myscript-math-web

1. Create your MyScript Developer then access your application key and hmac key 
Myscript-math-web requires a valid [MyScript Developer account](https://dev.myscript.com/) (sign up, then go to **Dashboard** and click **CDK samples** to accept the CDK Terms and Conditions).

2. Import Web Components' polyfill

    ```html
     <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
    ```

3. Import Custom Element

    ```html
    <link rel="import" href="bower_components/myscript-math-web.html">
    ```

3. Use it

    ```html
    <myscript-math-web applicationkey="#PUT YOUR MYSCRIPT CDK APPLICATION KEY HERE#" 
            hmackey="#PUT YOUR MYSCRIPT CDK HMAC KEY HERE#">
        </myscript-math-web>
    ```
    

## Documentation 

The API reference (html tag if you are unfamiliar with web components terminology) could be browse on [http://myscript.github.io/myscript-math-web/](http://myscript.github.io/myscript-math-web/) 

If you want use the component in a customized way please take time to read the full the [developer guide](http://dev.myscript.com).

## Contribute

We welcome your contributions: If you would like to extend myscript-math-web for your needs, feel free to fork it, fire bower install and use [polyserve](https://github.com/PolymerLabs/polyserve) as an http server. The demo page (in demo folder) could help making your first experimentation.

Please sign our [Contributor License Agreement](CONTRIBUTING.md) before submitting your pull request.


## Share your feedback

Made a cool app with myscript-math-web? We would love to hear about you!

We’re planning to showcase apps using it so let us know by sending a quick mail to [myapp@myscript.com](mailto://myapp@myscript.com)


## License

[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)
