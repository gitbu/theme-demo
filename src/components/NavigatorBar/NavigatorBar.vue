<template>
  <div>
    <div class="box">
      CSS in JS切换主题
    </div>
    <p>
      <slot name="child1" />
    </p>
    {{name}}
    <p>age: {{age}}</p>
    <button @click="$emit('clickLeft')">click</button>
    <p>
      <slot name="child2" :height="30" />
    </p>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'aaa',
    },
    age: Number,
  },
  mounted() {
    console.log('@this', this);
  },
};
</script>
