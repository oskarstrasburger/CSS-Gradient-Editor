<template>
  <div class="route-skeleton">
    <h3>Output</h3>
    <pre v-highlightjs="codeOutput"><code class="css">{{ codeOutput}}</code></pre>
  </div>
</template>

<script>
  export default {
    name: 'SkeletonPage',
    data() {
      return {
        codeOutput:
`background: gradient(),
            gradient(),`,
      };
    },
  };
</script>

<style lang="scss" scope>
  $border: 4px;
  pre {
    position: relative;
    border: $border dashed #c2c2c2;

    &:before {
      content: '';
      position: absolute;
      top: -$border + 1px;
      left: -$border + 1px;
      right: -$border + 1px;
      bottom: -$border + 1px;
      border: #{$border - 1px} solid white;
    }
  }
</style>
