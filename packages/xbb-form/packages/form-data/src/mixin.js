
import XbbInput from '../../xbb-input'
import XbbSelect from '../../xbb-select'
export default {
  components: {
    XbbInput,
    XbbSelect
  },

  data () {
    return {
      formData: {}
    }
  },

  created () {
    this.formData = this.setFormatData(this.fieldList)
  },

  methods: {
    /**
     * @description 获取对应渲染的组件
     */
    getComponent (fieldType = 1) {
      const fieldEnum = {
        1: 'XbbInput',
        2: 'XbbSelect'
      }
      return fieldEnum[fieldType]
    },

    setFormatData (fieldList) {
      const res = {}
      fieldList.forEach(field => {
        res[field.attr] = undefined
      })
      return res
    },
    /**
     * @description 字段修改值 在父级触发修改
     * @param {String} attr 
     * @param {any} value 
     */
    changeFormData (attr, value) {
      this.formData[attr] = value
    }
  }
}