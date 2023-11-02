import * as types from "./actionTypes";

export function onInputFieldChange(inputFieldName, inputValue) {
  return {
    type: types.ON_INPUT_FIELD_CHANGE,
    inputFieldName,
    inputValue
  };
}

export function getInsightLists(searchValue) {
  return {
    type: types.GET_INSIGHT_LISTS,
    searchValue
  };
}
export function getGraphLists() {
  return {
    type: types.GET_GRAPH_LISTS,
    searchValue
  };
}
export function getMapLists(searchValue) {
  return {
    type: types.GET_MAP_LISTS,
    searchValue
  };
}
export function getTopicLists(searchValue) {
  return {
    type: types.GET_TOPICS_LISTS,
    searchValue
  };
}

// export function exportKeyList(exportType) {
//   return {
//     type: types.EXPORT_KEY_LIST,
//     exportType
//   };
// }