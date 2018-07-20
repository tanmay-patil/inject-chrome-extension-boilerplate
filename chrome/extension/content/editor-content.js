import React from "react";
import ReactDOM from "react-dom";
import Root from "../../../app/content/containers/Root";
import store from '../../../app/store/configureStore.dev';
import "../../../app/styles/base/base.scss";

// Message Listener function
chrome.runtime.onMessage.addListener((request, sender, response) => {
  // If message is injectApp
  if (request.injectApp) {

    if (document.getElementById('tribyl-chrome-extension-inject') === null) {
      console.log("INJECTING PAGE NOW !");
      // Inject our app to DOM and send response
      injectApp();
      response({
        startedExtension: true,
      });
    }
    else {
      let element = document.getElementById('tribyl-chrome-extension-inject');
      element.parentNode.removeChild(element);
      console.log("REMOVING INJECTED CONTENT");
    }


  }
});

// chrome.storage.local.get('state', (obj) => {
//   const { state } = obj;
//   const initialState = JSON.parse(state || '{}');

//   const createStore = require('../../app/store/configureStore');

//   ReactDOM.render(
//     <Root store={createStore(initialState)} />,
//     document.querySelector('#tribyl-chrome-extension-inject')
//   );
// });


function injectApp() {

  const anchor = document.createElement("div");
  anchor.id = "tribyl-chrome-extension-inject";

  const createStore = require('../../../app/store/configureStore')

  document.body.insertBefore(anchor, document.body.childNodes[0]);

  ReactDOM.render(
    <Root store={store} />,
    document.querySelector("#tribyl-chrome-extension-inject")
  );
}

// const proxyStore = new Store({
//   portName: "visual-editor"
// });

// //add empty div with id "funnel-envy-root" to any webpage
// //then, react app is created inside it!
// proxyStore.ready().then(() => {
//   const anchor = document.createElement("div");
//   anchor.id = "funnel-envy-root";
//   anchor.style.position = "fixed";
//   anchor.style.top = "0px";
//   anchor.style.left = "0px";
//   anchor.style.right = "0px";
//   anchor.style.border = "none";
//   anchor.style.width = "auto";
//   anchor.style.height = "auto";
//   anchor.style.margin = "0px";
//   anchor.style.padding = "0px";
//   anchor.style.backgroundColor = "transparent";
//   anchor.style.zIndex = "2147483647";
//   document.body.insertBefore(anchor, document.body.childNodes[0]);
//   ReactDOM.render(
//     <Root store={proxyStore} />,
//     document.querySelector("#funnel-envy-root")
//   );
// }); 

