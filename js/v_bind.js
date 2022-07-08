// 属性のデータバインディング

const vmBind = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js!'
  })
}).mount('#bind')