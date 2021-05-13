<template>
  <div id="cssTheme">
     <div>
      <el-radio-group v-model="themeType" @change="handleTheme">
        <el-radio-button label="lighter">白</el-radio-button>
        <el-radio-button label="dark">黑</el-radio-button>
        <el-radio-button label="red">红</el-radio-button>
      </el-radio-group>
    </div>
    <div class="box bg-color text-color">
      css变量切换主题
    </div>
  </div>
</template>

<script>
import theme from '@/theme/less';

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
      const headEle = document.querySelector('head');
      const customStyleEle = document.querySelector('#custom-theme');
      if (customStyleEle) {
        headEle.removeChild(customStyleEle);
      }
      window.less.modifyVars(theme[initializedTheme]);
    },
    handleTheme(themeType) {
      window.less.modifyVars(theme[themeType])
        .then(() => {
          console.log('修改成功');
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
.box {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
}
</style>
