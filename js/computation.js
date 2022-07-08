const vmComputation = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js!',
    basePrice: 100
  }),
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    taxIncludedPrice: {
      get: function() {
        return this.basePrice * 1.1
      },
      set: function(value) {
        this.basePrice = value / 1.1
      }
    },
    computedNumber: function() {
      return Math.random()
    }
  },
  methods: {
    reversedMessageMethod: function() {
      return this.message.split('').reverse().join('')
    },
    methodsNumber: function() {
      return Math.random()
    }
  }
}).mount('#computation')