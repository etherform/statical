<script lang="ts" setup>
import { routes } from 'vue-router/auto/routes'

const user = useUserStore()
const router = useRouter()

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
      Test button
    </el-button>
  </div>
</template>

<route lang="yaml">
meta:
  title: titles.home
  menuIndex: 1
  menuIcon: i-majesticons:home-line
</route>
