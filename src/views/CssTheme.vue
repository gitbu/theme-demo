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
import '@/theme/cssVar.css';

const INITIALIZED_THEME = 'lighter';

export default {
  name: 'App',
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
      document.documentElement.setAttribute('theme', initializedTheme);
    },
    handleTheme(theme) {
      document.documentElement.setAttribute('theme', theme);
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
