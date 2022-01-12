
import XbbInput from '../../xbb-input'
import XbbSelect from '../../xbb-select'
export default {
  components: {
    XbbInput,
    XbbSelect
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
    }
  }
}