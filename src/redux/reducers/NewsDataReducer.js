import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const NewsDataReducer = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    case types.ON_INPUT_FIELD_CHANGE:
      return {
        ...state,
        [action.inputFieldName]: action.inputValue,
      };
    case types.INSIGHT_API_SUCCESS:
      return {
        ...state,
        insightList: action.insightList,
        //rowDataDump: action.rowDataDump,
        insightListApiFailedMessage: ""
      };
      
    case types.INSIGHT_API_FAILED:
      return {
        ...state,
        insightListApiFailedMessage: action.insightListApiFailedMessage
      };
      case 'load':
        return "loaded";      
    default:
      return { ...state };
  }
};

export default NewsDataReducer;
