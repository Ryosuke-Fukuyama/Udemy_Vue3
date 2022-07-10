// ループ

const vmFor = Vue.createApp({
  data: () => ({
    colors: ['Red', 'Green', 'Blue'],

    user: {
      firstName: 'Taro',
      lastName: 'Yamada',
      age: 23
    }
  })
}).mount('#for')