<script setup lang="ts">
const app = useAppStore()
</script>

<template>
  <el-aside bg-bluegray-700 shadow h-full :class="app.sidebar.collapsed ? 'w-16' : 'w-52'">
    <sidebar-menu />
  </el-aside>
</template>
