import axios from "axios";

export function* axiosGet(url,loginToken) {
  let getResponse = yield axios.get(url,{
    headers: {
      'Authorization': loginToken
    }
  });
  return getResponse;
}

export function* axiosPost(url, payload, loginToken) {
  let postResponse = yield axios.post(url, payload,{
    headers: {
      'Authorization': loginToken
    }
  });
  return postResponse;
}

export function* axiosDelete(url,loginToken) {
  let deleteResponse = yield axios.delete(url,{
    headers: {
      'Authorization': loginToken
    }
  });
  return deleteResponse;
}

export function* axiosPut(url) {
  let putResponse = yield axios.put(url);
  return putResponse;
}