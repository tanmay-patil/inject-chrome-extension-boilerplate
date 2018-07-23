import React from "react";
import ReactDOM from "react-dom";
import Root from "../../../app/content/containers/Root";
import store from '../../../app/store/configureStore.dev';
import "../../../app/styles/base/base.scss";

const containerID = 'tribyl-chrome-extension-inject';

// Message Listener function
chrome.runtime.onMessage.addListener((request, sender, response) => {
  // If message is injectApp
  if (request.injectApp) {

    if (document.getElementById(containerID) === null) {
      console.log("INJECTING PAGE NOW !");
      // Inject our app to DOM and send response
      injectApp();
      response({
        startedExtension: true,
      });
    }
    else {
      closeExtension();
    }

  }
});

export const closeExtension = () => {
  let element = document.getElementById(containerID);
  element.parentNode.removeChild(element);
  console.log("REMOVING INJECTED CONTENT");
}


function injectApp() {

  const anchor = document.createElement("div");
  anchor.id = containerID;

  const createStore = require('../../../app/store/configureStore')

  document.body.insertBefore(anchor, document.body.childNodes[0]);

  ReactDOM.render(
    <Root store={store} />,
    document.querySelector(`#${containerID}`)
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

