import Vue from 'vue';
import moment from 'moment';

Vue.filter('fullName', profile => {
  if (!profile) return '';
  return `${profile.firstName} ${profile.lastName}`;
});
Vue.filter('formatShortDate', day => {
  if (typeof day === 'string') {
    return moment(day).format("MMM Do YYYY");
  }
  return day.format("MMM Do YYYY");
});

Vue.filter('formatMMMDD', day => {
  if (typeof day === 'string') {
    return moment(day).format("MMM DD");
  }
  return moment(day).format("MMM DD");
});

Vue.filter('formatDMY', day => {
  if (typeof day === 'string') {
    return moment(day).format("DD MMM, YYYY");
  }
  return moment(day).format("DD MMM, YYYY");
});

Vue.filter('formatTime', day => {
  if (typeof day === 'string') {
    return moment(day).format("HH:mm:ss");
  }
  return moment(day).format("HH:mm:ss");
});

Vue.filter('formatFullDateTime', day => {
  if (typeof day === 'string') {
    return moment(day).format("lll");
  }
  return moment(day).format("lll");
});
