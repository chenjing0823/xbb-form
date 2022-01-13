export default {
  computed: {
    attr () {
      return this.fieldInfo.attr
    },
    fieldValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('modelChange', value)
      }
    }
  },

  created () {
    this.mode === 'form' && this.init()
  },

  watch: {

    value (val) {
      console.log('value change: ', val)
    }

  },

  methods: {
    /**
     * 建立关联监听(工具方法)
     */
    addWatch (tatget, callback, immediate = false) {
      let watcher = this.$watch(tatget, function (newVal, oldVal) {
        callback && callback(newVal, oldVal)
      }, {
        immediate: immediate
      })
      this.$once('hook:beforeDestroy', function () {
        watcher()
      })
    },

    init () {
      const attr = this.fieldInfo.attr
      const { rely } = this.fieldInfo.defaultAttr
      if (rely) {
        console.log('cj', rely)
        this.addWatch('formData.' + rely, (val, oldVal) => {
          this.$emit('changeFormData', attr, val)
          // this.formData[attr] = val
        })
      }
    }
  }
}