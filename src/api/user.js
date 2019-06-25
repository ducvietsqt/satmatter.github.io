import { get, patch } from './base';
let url_me = "/api/users/me";
async function getMe() {
  return await get(url_me);
}
async function getListUser() {
  return {
    totals: 100,
    dataUser: {}
  };
}
async function updateProfile(data) {
  return await patch(url_me, data);
}
export default { getMe, updateProfile, getListUser };
