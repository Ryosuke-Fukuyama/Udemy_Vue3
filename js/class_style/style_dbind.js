const vmStyle_dbind = Vue.createApp({
  data: () => ({
    color: 'green',
    fontSize: '36px',

    styleObject: {
      color: 'green',
      fontSize: '36px'
    }
  })
}).mount('#style_dbind')