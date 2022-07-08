const vmOnce = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js!'
  }),
  methods: {
    clickHandler: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}).mount('#once')