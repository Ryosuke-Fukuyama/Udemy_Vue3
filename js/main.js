// const app = Vue.createApp({
//   data: () => ({
//     message: 'Hello Vue.js!'
//   })
// })
// app.mount('#bpp')

const app = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js!',
    count: 0,
    user: {
      lastName: 'Nakamura',
      firstName: 'Yuta',
      prefecture: 'Tokyo'
    },
    colors: ['Red', 'Green', 'Blue']
  })
}).mount('#app')

// const app = Vue.createApp({
//   data: function() {
//     return {
//       message: 'Hello Vue.js'
//     }
//   }
// }).mount('#bpp')
