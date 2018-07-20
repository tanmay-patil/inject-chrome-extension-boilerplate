import React from "react";
import ReactDOM from "react-dom";
import { Store } from "react-chrome-redux";
import Root from "../../../app/content/containers/Root";

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

function injectApp() {
  // const newDiv = document.createElement("div");
  // newDiv.setAttribute("id", "chromeExtensionReactApp");
  // document.body.appendChild(newDiv);
  // ReactDOM.render(<App />, newDiv);

  const proxyStore = new Store({
    portName: "visual-editor"
  });

  const anchor = document.createElement("div");
  anchor.id = "tribyl-chrome-extension-inject";
  anchor.style.position = "fixed";
  anchor.style.top = "0px";
  anchor.style.left = "0px";
  anchor.style.right = "0px";
  anchor.style.border = "none";
  anchor.style.width = "auto";
  anchor.style.height = "auto";
  anchor.style.margin = "0px";
  anchor.style.padding = "0px";
  anchor.style.backgroundColor = "transparent";
  anchor.style.zIndex = "2147483647";
  document.body.insertBefore(anchor, document.body.childNodes[0]);
  ReactDOM.render(
    <Root store={proxyStore} />,
    document.querySelector("#tribyl-chrome-extension-inject")
  );
}