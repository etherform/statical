<template>
  <sidebar />
  <el-container flex flex-col>
    <topbar />
    <el-main bg-neutral-200 p-2>
      <router-view />
    </el-main>
  </el-container>
</template>
