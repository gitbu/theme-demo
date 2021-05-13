<template>
  <div id="cssTheme">
    <div>
      <el-radio-group v-model="themeType" @change="handleTheme">
        <el-radio-button label="lighter">白</el-radio-button>
        <el-radio-button label="dark">黑</el-radio-button>
        <el-radio-button label="red">红</el-radio-button>
      </el-radio-group>
    </div>
    <navigator-bar ref="myNavBar" :name="name" :age="age" @clickLeft="handleClickLeft" id="id">
      <template v-slot:child1>
        child1
      </template>
      <template v-slot:child2="props">
        child2
        {{props.height}}
      </template>
    </navigator-bar>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import NavigatorBar from '@/components/NavigatorBar';

const INITIALIZED_THEME = 'lighter'

export default {
  name: 'App',
  components: {
    NavigatorBar,
  },
  data() {
    return {
      name: 'temp',
      age: 1,
      themeType: INITIALIZED_THEME,
    };
  },
  created() {
    this.initTheme(INITIALIZED_THEME);
  },
  methods: {
    ...mapMutations('theme', [
      'setThemeType',
    ]),
    initTheme(initializedTheme) {
      this.setThemeType(initializedTheme);
    },
    handleTheme(theme) {
      this.name = theme;
      this.age += this.age;
      this.setThemeType(theme);
    },
    handleClickLeft() {
      console.log(this.$refs.myNavBar);
      console.log('click left');
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
</style>
