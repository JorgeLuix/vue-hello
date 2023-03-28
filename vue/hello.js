const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Benvenuti su Vue.js!',
            image: '/img/dragon-ball-super-gohan.webp'
        }
        
      }
}).mount('#app');