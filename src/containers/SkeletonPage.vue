<template>
  <div class="route-skeleton">
    <el-input
      type="textarea"
      class="code"
      :autosize="{ minRows: 1, maxRows: 20}"
      v-model="codeOutput">
    </el-input>
    <h3>Output</h3>

    <pre><code class="css">{{ codeOutput}}</code></pre>
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
  .code .el-textarea__inner {
    font-family: 'Courier New', Courier, monospace;
  }
  $border: 4px;
  pre {
    position: relative;
    border: $border dashed #c2c2c2;
    padding: 4px 10px;

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
