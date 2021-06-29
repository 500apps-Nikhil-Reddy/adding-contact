import  Vue  from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';


Vue.component('friend-contact', FriendContact);
Vue.component('new-friend', NewFriend);

new Vue({
    el:'#app',
    render: h => h(App)
});//.mount('#app');


//app.mount('#app');

/*import Vue from 'vue';
import App from './App.vue';




new Vue({
  el:'#app',
  render: h => h(App)
});
*/