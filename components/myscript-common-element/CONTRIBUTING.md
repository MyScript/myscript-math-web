# Contributing to MyScript Web

We gladly welcome pull requests to MyScript Web. If you would like to add or modify new or larger features, see the **Adding features** section below.
If you have any questions, or need help solving a problem, feel free to stop by the [#MyScript forum](https://dev.myscript.com/support/forum/).

## Code format

* Filename in smallcaps,  
* 4 spaces for indentation,  
* 120 character-line length.

In general, try to make your code blend in with the surrounding code.

## Adding features

Components are distributed as sets of HTML and CSS files. If the feature you want to add belongs to an existing component, add your contribution to the corresponding file.

If you want to create a component, first create a new set of files (HTML and CSS) associated to this component. Filename should be the component name in smallcaps.

## Testing

Local testing can be done using the `web-component-tester` engine through a web server. First, install all dependencies `bower install` from the root folder of the project, then open the test page in a web browser.

MyScript Web supports all major browsers. However, as it is hard to test all versions of all browsers, please test your changes in as many browsers as possible.

Simply navigate to the `/test` directory of your element to run tests and launch your web server. If you are using [Polyserve](https://github.com/PolymerLabs/polyserve), open `http://localhost:8080/components/myscript-renderer/test/`.

### web-component-tester

Install [web-component-tester](https://github.com/Polymer/web-component-tester): `npm install -g web-component-tester`. You can then run your tests on all your local browsers: `wct`

#### WCT Tips

`wct -l chrome` will only run tests in Google Chrome.

`wct -p` will keep the browsers alive after test runs (refresh to re-run).

`wct test/some-file.html` will test only the files you specify.

## Contributor License Agreement

In order to contribute, you must first agree to the **Contributor License Agreement** available [here](http://goo.gl/forms/YyzZ9VSvYG).

Make sure you read the article **[Contributing to Open Source on GitHub](https://guides.github.com/activities/contributing-to-open-source/)** to understand the contributing process.

## License

This library is licensed under the [Apache 2.0](http://opensource.org/licenses/Apache-2.0).