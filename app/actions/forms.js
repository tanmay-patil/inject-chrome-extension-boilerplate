import { CHANGE_COMPONENT_MODE } from "../constants/ActionTypes";

export const updateComponentMode = newComponentMode => ({ type: CHANGE_COMPONENT_MODE, payload: newComponentMode });
