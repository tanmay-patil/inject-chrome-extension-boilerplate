import cloneDeep from "lodash/cloneDeep";
import * as ActionTypes from "../constants/ActionTypes";

/*********
* in the global state of the extension's React/Redux app,
* we store the changes under "selectors" and "cssChanges"
* TODO: right now they persist all over the place
* the issue is that we are not loading back from the server or distinguishing between webpages
*********/
const initialState = {
  editorEnabled: true,
  selectors: [], //list of JS or html changes to elements on the page "Provide the implementation of a function that will be called for each selected element."
  cssChanges: "", //a global block of CSS for the entire page
  selectedElement: null,
  enableInteractiveMode: false,
  isEditingText: false,
  isChangeDrawerOpen: false
};

const actionsMap = {
  [ActionTypes.ENABLE_EDITOR](state) {
    return Object.assign({}, state, {
      editorEnabled: true,
      selectors: [],
      cssChanges: "",
      selectedElement: null,
      enableInteractiveMode: false,
      isEditingText: false,
      isChangeDrawerOpen: false
    });
  },
  [ActionTypes.DISABLE_EDITOR](state) {
    return Object.assign({}, state, {
      editorEnabled: false,
      selectors: [],
      cssChanges: "",
      selectedElement: null,
      enableInteractiveMode: false,
      isEditingText: false,
      isChangeDrawerOpen: false
    });
  },
  [ActionTypes.ADD_SELECTOR](state, action) {
    const selectors = cloneDeep(state.selectors);
    selectors.push(action.selector);
    return Object.assign({}, state, {
      selectors
    });
  },

  [ActionTypes.RESET_SELECTORS](state, action) {
    const selectors = [];
    return Object.assign({}, state, {
      selectors
    });
  },

  [ActionTypes.ADD_CHANGE](state, action) {
    const selectors = cloneDeep(state.selectors);
    selectors[action.selectorIndex].changes.push(action.change);
    return Object.assign({}, state, {
      selectors
    });
  },
  [ActionTypes.EDIT_CHANGE](state, action) {
    const selectors = cloneDeep(state.selectors);
    const selector = selectors[action.selectorIndex];
    selector.changes.splice(action.changeIndex, 1, action.change);
    return Object.assign({}, state, {
      selectors
    });
  },
  [ActionTypes.DELETE_CHANGE](state, action) {
    const selectors = cloneDeep(state.selectors);
    selectors.splice(action.selectorIndex, 1);
    selectors.splice(action.selectorIndex, 0, action.selector);
    return Object.assign({}, state, {
      selectors
    });
  },
  [ActionTypes.SAVE_CSS](state, action) {
    return Object.assign({}, state, {
      cssChanges: action.cssChanges
    });
  },
  [ActionTypes.SELECT_ELEMENT](state, action) {
    return Object.assign({}, state, {
      selectedElement: action.element
    });
  },
  [ActionTypes.SET_INTERACTIVEMODE](state, action) {
    return Object.assign({}, state, {
      enableInteractiveMode: action.bool
    });
  },
  [ActionTypes.EDITING_TEXT](state, action) {
    return Object.assign({}, state, {
      isEditingText: action.bool
    });
  },
  [ActionTypes.OPEN_CHANGE_DRAWER](state) {
    return Object.assign({}, state, {
      isChangeDrawerOpen: true
    });
  },
  [ActionTypes.CLOSE_CHANGE_DRAWER](state) {
    return Object.assign({}, state, {
      isChangeDrawerOpen: false
    });
  }
};

export default function editors(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
