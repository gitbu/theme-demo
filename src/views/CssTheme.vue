<template>
  <div id="cssTheme">
    <div>
      <el-radio-group v-model="themeType" @change="handleTheme">
        <el-radio-button label="lighter">白</el-radio-button>
        <el-radio-button label="dark">黑</el-radio-button>
        <el-radio-button label="red">红</el-radio-button>
      </el-radio-group>
    </div>
    <div class="box cssvar-theme">
      css变量切换主题
    </div>
  </div>
</template>

<script>
import theme from '../theme/cssvar';

export default {
  name: 'App',
  data() {
    return {
      themeType: 'dark',
    };
  },
  created() {
    // this.initTheme(INITIALIZED_THEME);
  },
  methods: {
    initTheme(initializedTheme) {
      document.documentElement.setAttribute('theme', initializedTheme);
    },
    handleTheme(themeType) {
      // 获取主题类型
      const cssVars = theme[themeType];

      // 生成css变量
      let cssVarContent = ':root {';
      Object.entries(cssVars).forEach(([key, value]) => {
        const a = `${key}: ${value};`;
        cssVarContent += a;
      });
      cssVarContent += '}';

      // 设置到head的style中
      const headEle = document.querySelector('head');
      const styleId = 'custom-theme';
      let customStyleEle = document.querySelector(`#${styleId}`);
      if (!customStyleEle) {
        customStyleEle = document.createElement('style');
        customStyleEle.setAttribute('id', 'custom-theme');
        customStyleEle.innerHTML = cssVarContent;
      }
      headEle.appendChild(customStyleEle);
    },
  },
};
</script>

<style>
#cssTheme {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .cssvar-theme {
  color: var(--text-color);
  background-color: var(--bg-color);
} */
</style>
