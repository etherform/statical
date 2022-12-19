<template>
  <div flex w-full h-full>
    <sidebar />

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
