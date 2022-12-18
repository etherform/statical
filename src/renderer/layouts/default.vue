<script lang="ts" setup>
const app = useAppStore() // w-52
</script>

<template>
  <div flex w-full h-full>
    <el-aside bg-bluegray-700 shadow h-full :class="app.sidebar.collapsed ? 'w-16' : 'w-52'">
      <AsideContent />
    </el-aside>

    <div flex-column w-full>
      <el-header shadow h-12 flex items-center p-0>
        <HeaderContent />
      </el-header>

      <el-main class="app-main" flex-grow>
        <router-view />
      </el-main>
    </div>
  </div>
</template>
