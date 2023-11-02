import * as types from "../actions/actionTypes";
import { take, put, select, takeLatest } from "redux-saga/effects";
import { axiosGet, axiosPost, axiosDelete } from "../service";

import config from "../../config.json";
import { getUserState } from "../actions/helper";


//var createBrowserHistory = require("history").createBrowserHistory;
//const history = createBrowserHistory();

export default function* dataSaga() {
  yield takeLatest(types.GET_INSIGHT_LISTS, handleData);
}

export function* handleData(action) {
  if (action) {
    switch (action.type) {
      
      // case types.VALIDATE_USER_LOGIN: {
      //   let stateData = yield select(getUserState);
      //   const loginDetails = {
      //     userName: stateData.loginEmail,
      //     password: stateData.loginPassword
      //   };
      //   let getResponse;

      //   try {
      //     yield put({ type: types.START_API_LOADER, loadSpinner: true });

      //     getResponse = yield axiosPost(`${config.API_URL}/Login`, loginDetails);

      //     if (getResponse && getResponse.status === 200) {
      //       yield put({ type: types.LOGIN_API_SUCCESS, loginToken: getResponse.data });
      //       action.history.push('/dashboard');
      //     }
      //     yield put({ type: types.STOP_API_LOADER, loadSpinner: false });
      //   } catch (e) {
      //     yield put({ type: types.STOP_API_LOADER, loadSpinner: false });
      //     yield put({ type: types.LOGIN_API_FAILED, loginErrorMessage: e.response.data.message });
      //   }
      //   break;
      // }
      case types.GET_INSIGHT_LISTS: {
        //let stateData = yield select(getUserState);
        let searchData=action.searchData;
        let response;
        try {
          response = yield axiosGet(`${config.API_URL}/api/JSONTranslation/GetAllJsonDetails`, searchData);
          yield put({ type: types.INSIGHT_API_SUCCESS, rowData: response.data, rowDataDump: response.data });
        } catch (e) {
          if (e.response && e.response.data && e.response.data.message === "Token is Expired") {
            localStorage.clear();
            window.location.href = '/';
          }
          yield put({ type: types.INSIGHT_API_FAILED, insightListApiFailedMessage: e.response.data.message });
        }
        break;
      }
      // case types.ON_SAVE_KEY: {
      //   let stateData = yield select(getUserState);
      //   const addData = action.addData;
      //   console.log(addData);
      //   const addDetails = {
      //     keys: addData.keys,
      //     keyValues1: addData.keyValues1,
      //     keyValues2: addData.keyValues2,
      //     projectId: 1
      //   }
      //   let response;
      //   try {
      //     yield put({ type: types.START_API_LOADER, loadSpinner: true });
      //     response = yield axiosPost(`${config.API_URL}/api/JSONTranslation/CreateJsonDetails`, addDetails, stateData.loginToken);
      //     if (response.status === 201) {
      //       yield put({ type: types.STOP_API_LOADER, loadSpinner: false });
      //       yield put({ type: types.ON_SAVE_KEY_SUCCESS, addData: response.data.jsonrecord });
      //     }
      //   } catch (e) {
      //     if (e.response && e.response.data && e.response.data.message === "Token is Expired") {
      //       localStorage.clear();
      //       window.location.href = '/';
      //     }
      //     yield put({ type: types.STOP_API_LOADER, loadSpinner: false });
      //     yield put({ type: types.KEY_DETAILS_API_FAILED, keyDetailsFailedMessage: e.response.data.message });
      //   }
      //   break;
      // }
      // case types.ON_UPDATE_KEY: {
      //   let stateData = yield select(getUserState);
      //   const addData = action.addData;
      //   console.log(addData);
      //   const addDetails = {
      //     jsonKeyID: addData.jsonKeyID,
      //     keys: addData.keys,
      //     keyValues1: addData.keyValues1,
      //     keyValues2: addData.keyValues2,
      //     projectId: 1
      //   }
      //   let response;
      //   try {
      //     yield put({ type: types.START_API_LOADER, loadSpinner: true });

      //     if (addData.jsonKeyID) {
      //       response = yield axiosPost(`${config.API_URL}/api/JSONTranslation/UpdateJsonDetails`, addDetails, stateData.loginToken);
      //       if (response.status === 200) {
      //         yield put({ type: types.STOP_API_LOADER, loadSpinner: false });
      //         yield put({ type: types.ON_UPDATE_KEY_SUCCESS, addData: (response && response.data) ? response.data : action.addData });
      //       }
      //     }
      //   } catch (e) {
      //     if (e.response && e.response.data && e.response.data.message === "Token is Expired") {
      //       localStorage.clear();
      //       window.location.href = '/';
      //     }
      //     yield put({ type: types.STOP_API_LOADER, loadSpinner: false });
      //     yield put({ type: types.KEY_DETAILS_API_FAILED, keyDetailsFailedMessage: e.response.data.message });
      //   }
      //   break;
      // }
      // case types.EXPORT_KEY_LIST: {
      //   const exportType = action.exportType;
      //   let response;
      //   try {
      //     yield put({ type: types.START_API_LOADER, loadSpinner: true });

      //     response = yield axiosGet(`${config.API_URL}/api/JSONTranslation/ExportJSONDetailsFromTable`, { responseType: 'blob' }); //stateData.loginToken,
      //     if (response.status === 200) {
      //       yield put({ type: types.STOP_API_LOADER, loadSpinner: false });

      //       if (exportType) {
      //         const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      //         const link = document.createElement('a');
      //         link.href = downloadUrl;
      //         link.setAttribute('download', 'file.tsx'); //any other extension
      //         document.body.appendChild(link);
      //         link.click();
      //         link.remove();
      //       }
      //     }
      //   } catch (e) {
      //     if (e.response && e.response.data && e.response.data.message === "Token is Expired") {
      //       localStorage.clear();
      //       window.location.href = '/';
      //     }
      //     yield put({ type: types.STOP_API_LOADER, loadSpinner: false });
      //     yield put({ type: types.KEY_DETAILS_API_FAILED, keyDetailsFailedMessage: e.response.data.message });
      //   }
      //   break;
      // }
    }
  }
}