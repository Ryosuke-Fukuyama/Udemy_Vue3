// コンポーネント ※ネームケーシング: ケバブケースがベター

// // グローバル登録(メソッド使用)
// const vmComponent = Vue.createApp({
//   data: () => ({
//   })
// }).component('hello-component', {
//   template: '<p>Hello!</p>'
// }).mount('#component')

// ローカル登録(オプション使用)
const helloComponent = {
  template: '<p>Hello!</p>'
}
const buttonCounter = {
  template: '<div><span>count: </span><button v-on:click="countUp">{{ count }}</button></div>',
  data: () => ({
    count: 0
  }),
  methods: {
    countUp: function() {
      this.count++
    }
  }
}

const vmComponent = Vue.createApp({
  data: () => ({
  }),
  components: {
    'hello-component': helloComponent,
    'button-counter': buttonCounter
  }
}).mount('#component')
