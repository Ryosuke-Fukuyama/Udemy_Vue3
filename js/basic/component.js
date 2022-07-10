// コンポーネント

const vmComponent = Vue.createApp({
  data: () => ({
  })
}).component('hello-component', {
  template: '<p>Hello!</p>'
}).mount('#component')