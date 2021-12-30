import API from './API';

export default {
  saveForm(data) {
    return API().post('saveForm', data);
  },
};
