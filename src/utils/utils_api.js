import { CFG_HTTP } from "../cfg/cfg_http";

export class UtilsApi {
  static get(path, params) {
    return UtilsApi.requestWithoutBody(path, 'GET', params)
  }

  static delete(path, params) {
    return UtilsApi.requestWithoutBody(path, 'DELETE', params)
  }

  static post(path, params) {
    return UtilsApi.requestWithBody(path, 'POST', params);
  }

  static put(path, params) {
    return UtilsApi.requestWithBody(path, 'PUT', params);
  }

  static requestWithoutBody(path, method, params) {
    return fetch(CFG_HTTP.URL_BASE + path + UtilsApi.uriEncodeParams(params), {
      method,
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors'
    }).then(res => UtilsApi.parseJson(res));
  }

  static requestWithBody(path, method, params) {
    return fetch(CFG_HTTP.URL_BASE + path, {
      method,
      body: JSON.stringify(params),
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors'
    }).then(res => UtilsApi.parseJson(res));
  }

  static uriEncodeParams(params = {}) {
    let paramsStringified =
      Object
        .keys(params)
        .reduce((searchParams, currentParamKey) => {
          searchParams.append(currentParamKey, params[currentParamKey]);

          return searchParams
        }, new URLSearchParams())
        .toString();

    return paramsStringified ? `?${paramsStringified}` : '';
  }

  static parseJson(str) {
    return str.text().then((text) => {
      return text ? JSON.parse(text) : {};
    });
  }
}

export default UtilsApi;
