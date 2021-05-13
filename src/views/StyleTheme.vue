<template>
  <div id="styleInsert">
     <div>
      <el-radio-group v-model="themeType" @change="handleTheme">
        <el-radio-button label="lighter">白</el-radio-button>
        <el-radio-button label="dark">黑</el-radio-button>
        <el-radio-button label="red">红</el-radio-button>
      </el-radio-group>
    </div>
    <div class="box bg-color text-color">
      style内容替换切换主题
    </div>
  </div>
</template>

<script>
import theme from '@/theme/style';

const INITIALIZED_THEME = 'lighter';

export default {
  name: 'App',
  data() {
    return {
      themeType: INITIALIZED_THEME,
    };
  },
  mounted() {
    this.initTheme(INITIALIZED_THEME);
  },
  methods: {
    initTheme(initializedTheme) {
      const headEle = document.querySelector('head');
      const lessStyleEle = document.querySelector("style[id='less:color']");
      if (lessStyleEle) {
        headEle.removeChild(lessStyleEle);
      }
      this.handleTheme(initializedTheme);
    },
    handleTheme(themeType) {
      const styles = theme[themeType];
      this.handleStyle(styles);
    },
    handleStyle(styles) {
      let res = '';
      styles.forEach((item) => {
        const a = `.${item.className} {${item.attribute}: ${item.value}}`;
        res += a;
      });
      const headEle = document.querySelector('head');
      const styleId = 'custom-theme';
      const oldCustomEle = document.querySelector(`#${styleId}`);
      if (oldCustomEle) {
        headEle.removeChild(oldCustomEle);
      }
      const styleEle = document.createElement('style');
      styleEle.setAttribute('id', 'custom-theme');
      styleEle.innerHTML = res;
      headEle.appendChild(styleEle);
    },
  },
};
</script>

<style>
#styleInsert {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
