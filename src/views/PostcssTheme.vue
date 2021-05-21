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
      postcss切换主题
    </div>
  </div>
</template>

<script>

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
      this.handleTheme(initializedTheme);
    },
    handleTheme(themeType) {
      document.body.className = `${document.body.className} ${themeType}`;
    },
  },
};
</script>

<style>
@import "../theme/pcss/default.css";
.cssvar-theme {
  color: var(--text-color);
  background-color: var(--bg-color);
}
</style>
