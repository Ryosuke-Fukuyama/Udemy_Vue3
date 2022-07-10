// イベント

const vmOn = Vue.createApp({
  data: () => ({
    now: '-'
  }),
  // Vueでは関数定義(methods)をES6のアロー関数を使わずに、ES5以前からの書き方のfunction式を使う方法が推奨されている。
  // アロー関数のthisは、function式と違いインスタンス内ではそのインスタンスを指すという動きをしない。
  // アロー関数は呼び出された場所(この場合はオプションのオブジェクト内)をthisとするという動きをする為要素(now)がundefinedとなる。
  // NG例  methods: { onClick: () => { this.~~ }}
  methods: {
    onClick: function() {
  // console.log('onClick!')
  this.now = new Date().toLocaleString()
    }
  }
}).mount('#on')