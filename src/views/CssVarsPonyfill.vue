<template>
  <div id="cssTheme">
    <div>
      <el-radio-group v-model="themeType" @change="handleTheme">
        <el-radio-button label="lighter">白</el-radio-button>
        <el-radio-button label="dark">黑</el-radio-button>
        <el-radio-button label="red">红</el-radio-button>
      </el-radio-group>
    </div>
    <div class="box cssvar-theme" >
      css变量切换主题
    </div>
    <test />
  </div>
</template>

<script>
import cssVars from 'css-vars-ponyfill';
import theme from '@/theme/cssVarsPonyfill';
import Test from '@/components/test.vue';

const INITIALIZED_THEME = 'lighter';

export default {
  name: 'App',
  components: {
    Test,
  },
  data() {
    return {
      themeType: INITIALIZED_THEME,
    };
  },
  created() {
    this.initTheme(INITIALIZED_THEME);
  },
  methods: {
    initTheme(initializedTheme) {
      this.handleTheme(initializedTheme);
    },
    handleTheme(themeType) {
      document.documentElement.setAttribute('data-theme', themeType);
      cssVars({
        // watch: true, // 当添加，删除或修改其<link>或<style>元素的禁用或href属性时，ponyfill将自行调用
        variables: theme[themeType], // variables 自定义属性名/值对的集合
        onlyLegacy: true, // false  默认将css变量编译为浏览器识别的css样式  true 当浏览器不支持css变量的时候将css变量编译为识别的css
      });
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
.cssvar-theme {
  color: var(--text-color);
  background-color: var(--bg-color);
}
</style>
