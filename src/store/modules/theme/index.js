import mutations from './mutations';
import actions from './actions';
import themeConfigMap, { THEME_TYPES } from '../../../theme/cssInJs';

const state = {
  themeType: THEME_TYPES.LIGHTER, // 当前主题类型
};

const getters = {
  themeConf(themeState) {
    const rst = themeConfigMap.get(themeState.themeType);

    return rst;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
