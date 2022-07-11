const vmForm = Vue.createApp({
  data: () => ({
    checked: false,
    colors: [],
    color: '',
    selected: '',
    selecting: [],
    message: '',
    age: 0
  })
}).mount('#form')