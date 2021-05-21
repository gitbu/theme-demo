<template>
  <div id="app">
    <theme-provider :theme="themeConf">
      <div id="nav">
        <router-link to="/cssTheme">css变量主题</router-link>
        <router-link to="/lessTheme">less变量主题</router-link>
        <router-link to="/styleTheme">style替换主题</router-link>
        <router-link to="/cssInJsTheme">cssInJs替换主题</router-link>
        <router-link to="/cssVarsPonyfill">CssVarsPonyfill替换主题</router-link>
         <router-link to="/postcss">postcss替换主题</router-link>
      </div>
      <router-view/>
    </theme-provider>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('theme', [
      'themeConf',
    ]),
  },
};
</script>

<style>
@import "./theme/pcss/default.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 15px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
