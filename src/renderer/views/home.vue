<script lang="ts" setup>
const user = useUserStore()

const handle = async () => {

}
</script>

<template>
  <div>
    <div class="i-mdi-alarm text-orange-400" />
    <h3>Forever Empty Dashboard.</h3>
  </div>
  <div>
    <el-button type="primary" @click="handle">
      Change Icon
    </el-button>
  </div>
</template>

<route lang="yaml">
meta:
  title: titles.home
</route>
