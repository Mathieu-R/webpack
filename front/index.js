import { h, render } from 'preact'
import App from './components/app'

let root;
// render a root component in <body>
const rendering = Component => {
  root = render(<Component/>, document.body, root);
};

// preact hmr
if (module.hot) {
  require('preact/devtools'); // use react devtools only in dev
  module.hot.accept('./components/app', rendering(App));
}

rendering(App);
