import _ from 'lodash';
export const getSubdomain = hostname => {
  let appDomain = process.env.VUE_APP_DOMAIN || "localhost";
  return hostname.replace(appDomain, "").split(".")[0];
};

export const isValidSubdomain = subdomain => {
  return !!subdomain && subdomain.indexOf(".") === -1;
};

export const getMainURL = () => {
  return location.origin.replace(`${getSubdomain(location.hostname)}.`, "");
};

export const getSubdomainURL = subdomain => {
  return `${location.protocol}//${subdomain}.${location.host}`;
};

export const SESSION = {
  TOKEN: 'token',
  SUBDOMAINS: 'subdomains'
}
export let setSESSION = (session_name, data) => {
  return localStorage.setItem(session_name, data);
};
window.setSESSION = setSESSION;
window.SESSION = SESSION;
window.getSESSION = getSESSION;
export let getSESSION = (session_name) => {
  let value = localStorage.getItem(session_name);
  try {
    return JSON.parse(localStorage.getItem(session_name));
  } catch (error) {
    return value;
  }
};

export let removeSESSION = (session_name, remove_all = false) => {
  let removeAll = () => {
    for (let k in SESSION) {
      localStorage.removeItem(SESSION[k]);
    }
  };
  let removeItems = () => {
    for (let i = 0; i < session_name.length; i++) {
      localStorage.removeItem(session_name[i]);
    }
  };
  // todo: remove all session
  if (remove_all) return removeAll();
  // todo: remove items session
  if (Array.isArray(session_name)) return removeItems();
  // todo: remove string name
  return localStorage.removeItem(session_name);
};


export let getFormData = (data) => {
  let formData = new FormData();
  _.keys(data).forEach(function (key) {
    let value = data[key];
    if (value === null) {
      value = '';
    }
    if (typeof value === "object" && key !== "avatar") {
      _.keys(value).forEach(function (key2) {
        let value2 = value[key2];
        if (value2 === null) {
          value2 = '';
        }
        formData.append(key + '.' + key2, value2);
      })
    } else {
      if (key === 'avatar') {
        if (value != null && (typeof value !== "string")) {
          formData.append(key, value);
        }
      } else {
        formData.append(key, value);
      }
    }

  });
  return formData;
};
