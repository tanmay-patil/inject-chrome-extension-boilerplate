import * as types from "../constants/ActionTypes";

export function enableEditor() {
  return { type: types.ENABLE_EDITOR };
}

export function disableEditor() {
  return { type: types.DISABLE_EDITOR };
}

export function addChange(selectorIndex, change) {
  return { type: types.ADD_CHANGE, selectorIndex, change };
}

export function editChange(selectorIndex, changeIndex, change) {
  return {
    type: types.EDIT_CHANGE,
    selectorIndex,
    changeIndex,
    change
  };
}

export function addSelector(selector) {
  return { type: types.ADD_SELECTOR, selector };
}

export function deleteChange(selectorIndex, selector) {
  return { type: types.DELETE_CHANGE, selectorIndex, selector };
}

export function saveCss(cssChanges) {
  return { type: types.SAVE_CSS, cssChanges };
}

export function selectElement(element) {
  return { type: types.SELECT_ELEMENT, element };
}

export function toggleInteractiveMode(bool) {
  return { type: types.SET_INTERACTIVEMODE, bool };
}

export function toggleEditingText(bool) {
  return { type: types.EDITING_TEXT, bool };
}

export function openChangeDrawer() {
  return { type: types.OPEN_CHANGE_DRAWER };
}

export function closeChangeDrawer() {
  return { type: types.CLOSE_CHANGE_DRAWER };
}
