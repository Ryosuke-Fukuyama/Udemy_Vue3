const vmWatcher = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js!',
    colors: [
      { name: 'Red'},
      { name: 'Green'},
      { name: 'Blue'}
    ],
    items: null,
    keyword: '',
    announce: ''
  }),
  watch: {
    message: function(newValue, oldValue) {
      console.log('new: %s, old: %s', newValue, oldValue)
    },
    colors: {
      handler: function(newValue, oldValue) {
        console.log('Update!')
      },
      // ネストされた値の変更も検知するオプション
      deep: true
    },
    keyword: function(newKeyword, oldKeyword) {
      // console.log(newKeyword)
      this.announce = 'Waiting for you to typing...'
      this.debouncedGetAnswer()
    }
  },
  mounted: function() {
    // this.keyword = 'JavaScript'
    // this.getAnswer()
    // .debounceはlodashライブラリの関数
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
  methods: {
    onClick: function() {
      this.colors[1].name = 'White'
    },
    getAnswer: function() {
      if(this.keyword === '') {
        console.log('karamoji')
        this.items = null
        return
      }

      this.announce = 'Loading...'
      const vm = this
      const params = { page: 1, per_page: 10, query: this.keyword }
      axios.get('https://qiita.com/api/v2/items', { params })
            .then(function(response){
              // console.log(response)
            vm.items = response.data
            })
            .catch(function(error){
              vm.message = 'Error!' + error
            })
            .finally(function() {
              vm.announce = ''
            })
    }
  }
}).mount('#watcher')