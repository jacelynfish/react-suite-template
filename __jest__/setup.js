var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var JSDOM = require('jsdom').JSDOM;

const dom = new JSDOM(
  '<body> <script>document.body.appendChild(document.createElement("div"));document.querySelector("div").id="app";</script></body>'
);

global.window = dom.window;
global.document = global.window.document;
global.navigator = global.window.navigator;

enzyme.configure({ adapter: new Adapter() });
