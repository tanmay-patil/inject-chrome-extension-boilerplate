import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'react-chrome-redux';
import Root from '../../../app/popup/containers/Root';

const proxyStore = new Store({
    portName: 'visual-editor'
});

proxyStore.ready().then(() => {
    ReactDOM.render(
        <Root store={proxyStore} />,
        document.querySelector('#root')
    );
});
