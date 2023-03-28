const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Benvenuti su Vue.js!',
            image: '/img/dragon-ball-super-gohan.webp',
            image2:'/img/por-cierto-calamardo-de-bob-esponja-no-es-un-cala-2-1245-1508437390-1_dblbig.jpg',
            image3:'/img/majin-boo_jebw.jpg',
            myclass: "img-fluid rounded"
        }
        
      }
}).mount('#app');