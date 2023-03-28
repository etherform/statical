<template>
  <sidebar />
  <q-page-container>
    <topbar h-48px z-1000 shadow />
    <q-page pt-48px bg-true-gray-100>
      <div flex flex-col m-2>
        <router-view />
      </div>
    </q-page>
  </q-page-container>
</template>

<style lang="scss" scoped>
$top-bar-height: 50px;
</style>
