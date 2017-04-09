import Vue from 'vue';
import moment from 'moment';


// Vue Filters
Vue.filter('date', function(value) {
    return moment(value).format('MM-DD-YYYY');
});

Vue.filter('price', function(value) {
    return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

Vue.filter('titleCase', function(value) {
    return value.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
});
