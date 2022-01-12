/* eslint-disable */
import XbbForm from '../packages/form-data/index'
import XbbInput from '../packages/xbb-input/index'
import XbbSelect from '../packages/xbb-select/index'

import packageInfo from '../package.json'

const components = [
  XbbForm,
  XbbInput,
  XbbSelect
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  version: packageInfo.version,
  install,
  XbbForm,
  XbbInput,
  XbbSelect
}
