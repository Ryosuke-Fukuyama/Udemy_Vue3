const vmHtml = Vue.createApp({
  data: () => ({
    message: 'Hello <span style="color:red;">Vue.js!</span>'
  })
  // methods: function()
}).mount('#html')