<script lang="ts" setup>
const user = useUserStore()
const router = useRouter()
</script>

<template>
  <div content-block>
    <div>
      <p text-4>
        Forever Empty Dashboard.
      </p>
    </div>
  </div>

  <div content-block mt-2>
    <!-- Dropdown menu -->
    <div id="userDropdown" class="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
      <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div>Bonnie Green</div>
        <div class="font-medium truncate">
          name@flowbite.com
        </div>
      </div>
      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
        <li>
          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
      </ul>
      <div class="py-1">
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  title: titles.home
  menuIndex: 1
  menuIcon: i-majesticons:home-line
</route>

<style lang="scss" scoped>

</style>
