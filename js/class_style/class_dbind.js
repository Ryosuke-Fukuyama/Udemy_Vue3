const vmClass_dbind = Vue.createApp({
  data: () => ({
    isLarge: true,
    hasError: true,

    largeClass: 'large',
    dangerClass: 'text-danger',

    classObject: {
      large: true,
      'text-danger': true
    }
  })
}).mount('#class_dbind')