const vmClass_if = Vue.createApp({
  data: () => ({
    largeClass: {
      large: true
    },
    dangerClass: {
      'text-danger': true
    },
    isLarge: true
  })
}).mount('#class_if')