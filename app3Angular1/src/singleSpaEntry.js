import singleSpaAngular1 from 'single-spa-angular1';
import angular from 'angular';

import './app.module.js';
import './routes.js';

const angularLifecycles = singleSpaAngular1({
    angular,
    domElementGetter,
    mainAngularModule: 'app',
    uiRouter: true,
    preserveGlobal: false,
});

export function bootstrap(props) {
    return angularLifecycles.bootstrap(props);
}

export function mount(props) {
    return angularLifecycles.mount(props);
}

export function unmount(props) {
    return angularLifecycles.unmount(props);
}

function domElementGetter() {
    // Make sure there is a div for us to render into
    let el = document.getElementById('app');
    if (!el) {
        el = document.createElement('div');
        el.id = 'app';
        document.getElementById('container').appendChild(el)
    }

    return el;
}
