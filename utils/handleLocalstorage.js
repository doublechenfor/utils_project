const STORAGENAME = 'INIT';
const STORAGE = window.localStorage;

const storage = {
  set(type, val) {
    let getVal = STORAGE.getItem(STORAGENAME);
    if (getVal) {
      getVal = JSON.parse(getVal);
    } else {
      getVal = {};
    }
    getVal[type] = val;
    window.localStorage.setItem(STORAGENAME, JSON.stringify(getVal));
  },
  get(type) {
    let val;
    try {
      val = JSON.parse(STORAGE.getItem(STORAGENAME));
    } catch (e) {
      val = {};
    }
    return val && val[type];
  },
  remove(type){
    let val;
    try {
      val = JSON.parse(STORAGE.removeItem(STORAGENAME));
    } catch (e) {
      val = {};
    }
    return val && val[type];
  }
};

export default storage;
