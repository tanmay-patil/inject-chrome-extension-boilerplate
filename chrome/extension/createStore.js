import { wrapStore } from "react-chrome-redux";
import * as types from "../../app/constants/ActionTypes";

let store;
chrome.storage.local.get("state", obj => {
  const { state } = obj;
  const initialState = JSON.parse(state || "{}");
  const createStore = require("../../app/store/configureStore");

  store = createStore(initialState);
  wrapStore(store, {
    portName: "visual-editor"
  });
});

/* chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {

  if (request.url) {
    chrome.tabs.create({ url: request.url }, tab => {
      store.dispatch({ type: types.ENABLE_EDITOR });
    });
  }
  else if (request.type) {
    switch (request.type) {
      case 'setCookieInfo': //keep track of user's cookie and origin url so extension can successfully POST
        const cookieLocation = request.cookieUrl;

        chrome.cookies.get({ "url": cookieLocation, "name": "sails.sid" }, function (cookie) {

          if (cookie && cookie.value) {
            const cookieInfo = {
              cookieValue: cookie.value,
              appUrlRoot: cookieLocation
            };

            chrome.storage.local.set({ 'cookieInfo': cookieInfo });
          }
          else {
            console.warn("FunnelEnvy extension couldn't find your session- you won't be able to save changes!");
          }
        });
        break;
      case 'setCurrentVariationInfo': //keep current variation info in sync between browser tabs
        const currentVariationInfo = request.currentVariationInfo;
        const currentVariationSaveUrl = request.currentVariationSaveUrl;

        console.log('Got a request from the main app to set currentVariationInfo to:', currentVariationInfo);
        console.log('Got a request from the main app to set currentVariationSaveUrl to:', currentVariationSaveUrl);

        if (currentVariationInfo) {
          chrome.storage.local.set({ 'currentVariationInfo': currentVariationInfo });
        }

        if (currentVariationSaveUrl) {
          chrome.storage.local.set({ 'currentVariationSaveUrl': currentVariationSaveUrl });
        }

        break;
      case 'getCurrentVariationEditorInfo':
        let selectors = (store.getState() && store.getState().editors && store.getState().editors.selectors) ? store.getState().editors.selectors : null;

        let customCSS = (store.getState() && store.getState().editors && store.getState().editors.cssChanges) ? store.getState().editors.cssChanges : null;

        console.log('sending JS from extension back to main page for save!!!', selectors);
        console.log('sending CSS from extension back to main page for save!!!', customCSS);

        sendResponse({
          selectors: selectors,
          customCSS: customCSS
        });
        break;
    }

  }

});
 */




